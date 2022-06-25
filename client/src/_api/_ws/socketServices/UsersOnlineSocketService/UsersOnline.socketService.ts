import { appSocket } from '_api/_ws/socketServices/app.socket';

export default class UsersOnlineSocketService {
	public static socket = appSocket;
	public static emits = {
		GET_IS_ONLINE: 'users-online~get-is-online',
		IS_USER_ONLINE: (userId: string) => `users-online~is-online:${userId}`,
		IS_ONLINE: `users-online~is-online`,
	};

	public static getIsUserOnline(userId: string) {
		this.socket.emit(this.emits.GET_IS_ONLINE, userId);
	}

	public static onIsOnline(
		callback: ({
			userId,
			isOnline,
		}: {
			userId: string;
			isOnline: boolean;
		}) => void
	) {
		this.socket.on(this.emits.IS_ONLINE, callback);
	}

	public static onIsUserOnline(
		userId: string,
		callback: (isOnline: boolean) => void
	) {
		this.socket.on(this.emits.IS_USER_ONLINE(userId), callback);
	}
}
