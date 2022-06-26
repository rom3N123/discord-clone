import { appSocket } from '_api/_ws/socketServices/app.socket';

const EMITS = {
    DELETE: 'delete',
    DELETED: 'deleted',
};

export default class FriendsSocketService {
    public static socket = appSocket;

    public static delete(friendId: string) {
        this.socket.emit(EMITS.DELETE, friendId);
    }

    public static onDelete(callback: (friendId: string) => any) {
        this.socket.on(EMITS.DELETED, callback);
    }
}
