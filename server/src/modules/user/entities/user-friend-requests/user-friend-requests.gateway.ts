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

const namespace = 'user-friend-requests';

@UseGuards(WsGuard)
@WebSocketGateway({ cors: true })
export class UserFriendRequestGateway {
    @WebSocketServer()
    private readonly wss: Server;

    constructor(
        private readonly userFriendRequestsService: UserFriendRequestsService,
        private readonly userFriendRequestService: UserFriendRequestService
    ) {}

    @SubscribeMessage(`${namespace}~create`)
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

            this.wss.to(socketIds).emit(`${namespace}~created`, request);
        } catch (error) {
            client.emit(`${namespace}-create~error`, error);
        }
    }

    @SubscribeMessage(`${namespace}~cancel`)
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
                .emit(`friends~canceled`, friendRequestId);
        } catch (error) {
            client.emit(`${namespace}-cancel~error`, error);
        }
    }

    @SubscribeMessage(`${namespace}~accept`)
    async accept(
        @ConnectedSocket() client: Socket,
        @MessageBody() requestId: string,
        @User() { _id }: JwtSignPayloadType
    ) {
        try {
            const {
                data: { newFriend, updatedUser },
            } = await this.userFriendRequestService.accept(requestId, _id);

            client.emit(`friends~accepted`, { requestId, newFriend });

            usersOnline.ifOnline(newFriend._id, (socketId) => {
                this.wss
                    .to(socketId)
                    .emit(`friends~accepted`, {
                        requestId,
                        newFriend: updatedUser,
                    });
            });
        } catch (error) {
            client.emit(`${namespace}-accept~error`, error);
        }
    }
}
