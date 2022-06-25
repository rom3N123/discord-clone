import { appSocket } from '_api/_ws/socketServices/app.socket';
import userFriendRequests from '@discord-clone/types/src/modules/user-friend-requests/ws';
import {
	CreateUserFriendRequestDto,
	UserFriendRequestClient,
	UserClient,
} from '@discord-clone/types';

export default class FriendRequestsSocketService {
	public static socket = appSocket;
	public static emits = userFriendRequests.EMITS;

	public static create(
		request: Omit<CreateUserFriendRequestDto, 'requestBy'>
	): void {
		this.socket.emit(this.emits.create, request);
	}
	public static accept(requestId: string) {
		this.socket.emit(this.emits.accept, requestId);
	}
	public static cancel(requestId: string) {
		this.socket.emit(this.emits.cancel, requestId);
	}

	public static onCreated(callback: (request: UserFriendRequestClient) => any) {
		this.socket.on(this.emits.created, callback);
	}
	public static onCanceled(callback: (requestId: string) => any) {
		this.socket.on(`friends~canceled`, callback);
	}
	public static onAccepted(
		callback: ({
			requestId,
			newFriend,
		}: {
			requestId: string;
			newFriend: UserClient;
		}) => any
	) {
		this.socket.on(`friends~accepted`, callback);
	}
}
