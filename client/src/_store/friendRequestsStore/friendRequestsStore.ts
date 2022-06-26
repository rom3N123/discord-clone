import { UserFriendRequestClient } from '@discord-clone/types';
import { makeAutoObservable } from 'mobx';
import { userStore } from '..';

class FriendRequestsStore {
    public friendRequests: UserFriendRequestClient[];

    constructor() {
        makeAutoObservable(this);
    }

    setFriendRequests(requests: UserFriendRequestClient[]) {
        this.friendRequests = requests;
    }

    addFriendRequest(friendRequest: UserFriendRequestClient) {
        this.friendRequests = [...this.friendRequests, friendRequest];
    }

    deleteFriendRequest(friendRequestId: string) {
        this.friendRequests = this.friendRequests.filter(
            (request) => request._id !== friendRequestId
        );
    }

    get pendingRequests() {
        return this.friendRequests.filter(
            (request) => request.requestBy._id !== userStore.user._id
        );
    }
}

export const friendRequestsStore = new FriendRequestsStore();
