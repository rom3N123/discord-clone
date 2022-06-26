import {
    ChannelClient,
    ChannelType,
    UserClient,
    UserFriendRequestClient,
} from '@discord-clone/types';

export type MeStoreType = {
    user: UserClient;
    channels: ChannelClient<ChannelType>[];
    friendRequests: UserFriendRequestClient[];
    friends: UserClient[];
};
