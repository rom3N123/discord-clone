import { usersOnline } from 'src/sockets/UsersOnline';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

const namespace = 'users-online';

export const USERS_ONLINE_EMITS = {
  GET_IS_ONLINE: `${namespace}~get-is-online`,
  IS_USER_ONLINE: (userId: string) => `${namespace}~is-online:${userId}`,
  IS_ONLINE: `${namespace}~is-online`,
};

@WebSocketGateway({
  cors: true,
})
export class UsersOnlineGateway {
  @WebSocketServer()
  private readonly wss: Server;

  @SubscribeMessage(USERS_ONLINE_EMITS.GET_IS_ONLINE)
  handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() userId: string,
  ) {
    const isOnline = usersOnline.getIsOnline(userId);

    client.emit(USERS_ONLINE_EMITS.IS_USER_ONLINE(userId), isOnline);
    this.wss.emit(USERS_ONLINE_EMITS.IS_ONLINE, { userId, isOnline });
  }
}
