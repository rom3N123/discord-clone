import { JwtSignPayloadType } from './modules/auth/types/index';
import { verify } from 'jsonwebtoken';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { UseGuards } from '@nestjs/common';
import { WsGuard } from './modules/auth/ws.guard';
import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { usersOnline } from './sockets/UsersOnline';
import { USERS_ONLINE_EMITS } from './modules/user/entities/users-online/users-online.gateway';

@UseGuards(WsGuard)
@WebSocketGateway({ cors: true })
export class AppGateway implements OnGatewayDisconnect, OnGatewayConnection {
  @WebSocketServer()
  private readonly wss: Server;

  handleConnection(client: Socket) {
    const token = client.handshake.headers.token as string;

    if (token) {
      const { _id } = verify(token, 'hello') as JwtSignPayloadType;

      usersOnline.store(client.id, _id);

      this.wss.emit(USERS_ONLINE_EMITS.IS_USER_ONLINE(_id), true);
      this.wss.emit(USERS_ONLINE_EMITS.IS_ONLINE, {
        userId: _id,
        isOnline: true,
      });
    }
  }

  handleDisconnect(client: Socket) {
    const userId = usersOnline.getUserIdBySocketId(client.id);

    this.wss.emit(USERS_ONLINE_EMITS.IS_USER_ONLINE(userId), false);
    this.wss.emit(USERS_ONLINE_EMITS.IS_ONLINE, { userId, isOnline: false });

    usersOnline.deleteBySocketId(client.id);
  }
}
