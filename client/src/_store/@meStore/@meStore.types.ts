import {
    ChannelClient,
    UserClient,
    UserFriendRequestClient,
} from '@discord-clone/types';

export type MeStoreType = {
    user: UserClient;
    channels: ChannelClient[];
    friendRequests: UserFriendRequestClient[];
    friends: UserClient[];
};
