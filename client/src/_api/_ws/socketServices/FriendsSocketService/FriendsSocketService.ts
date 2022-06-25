import friends from '@discord-clone/types/src/modules/friends/ws';
import { appSocket } from '_api/_ws/socketServices/app.socket';

export default class FriendsSocketService {
	public static socket = appSocket;
	public static emits = friends.EMITS;

	public static delete(friendId: string) {
		this.socket.emit(friends.EMITS.DELETE, friendId);
	}

	public static onDelete(callback: (friendId: string) => any) {
		this.socket.on(friends.EMITS.DELETED, callback);
	}
}
