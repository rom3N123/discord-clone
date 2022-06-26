import { MeClient } from '@discord-clone/types';
import { makeAutoObservable } from 'mobx';
import {
    channelsStore,
    friendRequestsStore,
    friendsStore,
    userStore,
} from '..';

class MeStore {
    constructor() {
        makeAutoObservable(this);
    }

    setClient({ user, friends, channels, friendRequests }: MeClient) {
        userStore.setUser(user);
        channelsStore.setChannels(channels);
        friendsStore.setFriends(friends);
        friendRequestsStore.setFriendRequests(friendRequests);
    }
}

export const meStore = new MeStore();
