import { UserFriendRequestService } from './entities/user-friend-request/user-friend-request.service';
import { JwtSignPayloadType } from './../../../auth/types/index';
import { UserFriendRequestsService } from './user-friend-requests.service';
import { UseGuards } from '@nestjs/common';
import { CreateUserFriendRequestDto } from './dto/create-user-friend-request.dto';
import {
    ConnectedSocket,
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { WsGuard } from '../../../auth/ws.guard';
import User from 'src/decorators/UserDecorator/User.decorator';
import { usersOnline } from 'src/sockets/UsersOnline';
import { FRIEND_REQUESTS_EMITS } from '@discord-clone/types';

@UseGuards(WsGuard)
@WebSocketGateway({ cors: true })
export class UserFriendRequestGateway {
    @WebSocketServer()
    private readonly wss: Server;
    constructor(
        private readonly userFriendRequestsService: UserFriendRequestsService,
        private readonly userFriendRequestService: UserFriendRequestService
    ) {}
    @SubscribeMessage(FRIEND_REQUESTS_EMITS.create)
    async create(
        @ConnectedSocket() client: Socket,
        @MessageBody()
        { requestTo }: Pick<CreateUserFriendRequestDto, 'requestTo'>,
        @User() { _id }: JwtSignPayloadType
    ) {
        try {
            const request = await this.userFriendRequestsService.create({
                requestTo,
                requestBy: _id,
            });
            const socketIds = usersOnline.getSocketsByUsersIds([
                requestTo,
                _id,
            ]);
            client.emit(`friends~canceled:success`);
            this.wss
                .to(socketIds)
                .emit(FRIEND_REQUESTS_EMITS.createSuccess, request);
        } catch (error) {
            client.emit(FRIEND_REQUESTS_EMITS.createError, error);
        }
    }
    @SubscribeMessage(FRIEND_REQUESTS_EMITS.cancel)
    async cancel(
        @ConnectedSocket() client: Socket,
        @MessageBody() requestId: string,
        @User() { _id }: JwtSignPayloadType
    ) {
        try {
            const {
                userFriendRequest: {
                    _id: friendRequestId,
                    requestBy,
                    requestTo,
                },
            } = await this.userFriendRequestService.delete(requestId, _id);
            this.wss
                .to(usersOnline.getSocketsByUsersIds([requestBy, requestTo]))
                .emit(FRIEND_REQUESTS_EMITS.cancelSuccess, friendRequestId);
        } catch (error) {
            client.emit(FRIEND_REQUESTS_EMITS.cancelError, error);
        }
    }
    @SubscribeMessage(FRIEND_REQUESTS_EMITS.accept)
    async accept(
        @ConnectedSocket() client: Socket,
        @MessageBody() requestId: string,
        @User() { _id }: JwtSignPayloadType
    ) {
        try {
            const {
                data: { newFriend, updatedUser },
            } = await this.userFriendRequestService.accept(requestId, _id);
            client.emit(FRIEND_REQUESTS_EMITS.acceptSuccess, {
                requestId,
                newFriend,
            });
            usersOnline.ifOnline(newFriend._id, (socketId) => {
                this.wss
                    .to(socketId)
                    .emit(FRIEND_REQUESTS_EMITS.acceptSuccess, {
                        requestId,
                        newFriend: updatedUser,
                    });
            });
        } catch (error) {
            client.emit(FRIEND_REQUESTS_EMITS.acceptError, error);
        }
    }
}
