import { useEffect } from 'react';
import FriendRequestsSocketService from '_api/_ws/socketServices/FriendRequestsSocketService';
import { friendRequestsStore, friendsStore } from '_store';

const useFriendRequestsSocketConnection = () => {
    useEffect(() => {
        FriendRequestsSocketService.onCreated((request) => {
            friendRequestsStore.addFriendRequest(request);
        });

        FriendRequestsSocketService.onCanceled((requestId: string) => {
            friendRequestsStore.deleteFriendRequest(requestId);
        });

        FriendRequestsSocketService.onAccepted(({ requestId, newFriend }) => {
            friendRequestsStore.deleteFriendRequest(requestId);
            friendsStore.addFriend(newFriend);
        });
    }, []);
};

export default useFriendRequestsSocketConnection;
