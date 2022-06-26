import { UserClient } from '@discord-clone/types';
import { makeAutoObservable } from 'mobx';
import UsersOnlineSocketService from '_api/_ws/socketServices/UsersOnlineSocketService';
import { FriendsById } from '.';

class FriendsStore {
    public friendsById: FriendsById;

    constructor() {
        makeAutoObservable(this);
    }

    private transformFriendsToObject(
        friends: UserClient[]
    ): typeof this.friendsById {
        return friends.reduce<typeof this.friendsById>(
            (friendsByObj, friend) => {
                friendsByObj[friend._id] = friend;

                return friendsByObj;
            },
            {}
        );
    }

    setFriends(friends: UserClient[]) {
        this.friendsById = this.transformFriendsToObject(friends);
    }

    addFriend(friend: UserClient) {
        this.friendsById[friend._id] = friend;
        /** FIXME */
        UsersOnlineSocketService.getIsUserOnline(friend._id);
    }

    deleteFriend(friendId: string) {
        delete this.friendsById[friendId];
    }

    updateFriend(friendId: string, friend: UserClient) {
        this.friendsById[friendId] = friend;
    }

    get friendsList(): UserClient[] {
        return Object.values(this.friendsById);
    }

    get onlineFriendsList(): UserClient[] {
        return this.friendsList.filter((friend) => friend.isOnline);
    }
}

export const friendsStore = new FriendsStore();
