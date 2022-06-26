import { usersOnline } from 'src/sockets/UsersOnline';
import { JwtSignPayloadType } from 'src/modules/auth/types';
import { UserFriendsService } from './user-friends.service';
import { UseGuards } from '@nestjs/common';
import {
    ConnectedSocket,
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { WsGuard } from 'src/modules/auth/ws.guard';
import User from 'src/decorators/UserDecorator/User.decorator';

const namespace = 'friends';

const emits = {
    DELETE: `${namespace}~delete`,
    DELETED: `${namespace}~deleted`,
};

@UseGuards(WsGuard)
@WebSocketGateway({ cors: true })
export class UserFriendsGateway {
    @WebSocketServer()
    private readonly wss: Server;

    constructor(private readonly userFriendsService: UserFriendsService) {}

    @SubscribeMessage(emits.DELETE)
    async delete(
        @ConnectedSocket() client: Socket,
        @MessageBody() friendId: string,
        @User() { _id }: JwtSignPayloadType
    ) {
        try {
            await this.userFriendsService.remove(_id, friendId);

            client.emit(emits.DELETED, friendId);

            usersOnline.ifOnline(friendId, (socketId) => {
                this.wss.to(socketId).emit(emits.DELETED, _id);
            });
        } catch (error) {
            console.log(error);
            client.emit('ALERT:ERROR', error);
        }
    }
}
