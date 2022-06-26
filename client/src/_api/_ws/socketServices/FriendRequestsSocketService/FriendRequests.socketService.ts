import { appSocket } from '_api/_ws/socketServices/app.socket';
import { FRIEND_REQUESTS_EMITS } from '@discord-clone/types';
import {
    CreateUserFriendRequestDto,
    UserFriendRequestClient,
    UserClient,
} from '@discord-clone/types';

export default class FriendRequestsSocketService {
    public static socket = appSocket;

    public static create(
        request: Omit<CreateUserFriendRequestDto, 'requestBy'>
    ): void {
        this.socket.emit(FRIEND_REQUESTS_EMITS.create, request);
    }
    public static accept(requestId: string) {
        this.socket.emit(FRIEND_REQUESTS_EMITS.accept, requestId);
    }
    public static cancel(requestId: string) {
        this.socket.emit(FRIEND_REQUESTS_EMITS.cancel, requestId);
    }

    public static onCreated(
        callback: (request: UserFriendRequestClient) => any
    ) {
        this.socket.on(FRIEND_REQUESTS_EMITS.createSuccess, callback);
    }

    public static onCanceled(callback: (requestId: string) => any) {
        this.socket.on(FRIEND_REQUESTS_EMITS.cancelSuccess, callback);
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
        this.socket.on(FRIEND_REQUESTS_EMITS.acceptSuccess, callback);
    }
}
