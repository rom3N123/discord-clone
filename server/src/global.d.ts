declare namespace Express {
  export interface User {
    user: UserClient;
    friendRequests: UserFriendRequestClient[];
    channels: ChannelClient[];
  }
}
