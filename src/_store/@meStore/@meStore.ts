import {
	MeClient,
	UserFriendRequestClient,
	UserClient,
	FriendClient,
} from '@discord-clone/types';
import { makeAutoObservable } from 'mobx';
import UsersOnlineSocketService from '_/_api/_ws/socketServices/UsersOnlineSocketService';

class MeStore {
	public user: MeClient['user'];
	public friendsById: Record<string, FriendClient>;
	public channels: MeClient['channels'];
	public friendRequests: MeClient['friendRequests'];

	constructor() {
		makeAutoObservable(this);
	}

	get pendingRequests() {
		return this.friendRequests.filter(
			request => request.requestBy._id !== this.user._id
		);
	}

	transformFriendsToObject(friends: FriendClient[]): typeof this.friendsById {
		return friends.reduce<typeof this.friendsById>((friendsByObj, friend) => {
			friendsByObj[friend._id] = friend;

			return friendsByObj;
		}, {});
	}

	get friendsList(): FriendClient[] {
		return Object.values(this.friendsById);
	}

	get onlineFriendsList(): FriendClient[] {
		return this.friendsList.filter(friend => friend.isOnline);
	}

	setClient(client: MeClient) {
		this.user = client.user;
		this.friendsById = this.transformFriendsToObject(client.friends);
		this.channels = client.channels;
		this.friendRequests = client.friendRequests;
	}

	addFriendRequest(friendRequest: UserFriendRequestClient) {
		this.friendRequests = [...this.friendRequests, friendRequest];
	}

	deleteFriendRequest(friendRequestId: string) {
		this.friendRequests = this.friendRequests.filter(
			request => request._id !== friendRequestId
		);
	}

	addFriend(friend: FriendClient) {
		this.friendsById[friend._id] = friend;
		/** FIXME */
		UsersOnlineSocketService.getIsUserOnline(friend._id);
	}

	deleteFriend(friendId: string) {
		delete this.friendsById[friendId];
	}

	updateFriend(friendId: string, friend: FriendClient) {
		this.friendsById[friendId] = friend;
	}
}

export default new MeStore();
