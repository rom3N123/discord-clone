import { useEffect } from 'react';
import FriendRequestsSocketService from '_api/_ws/socketServices/FriendRequestsSocketService';
import MeStore from '_store/@meStore';

const useFriendRequestsSocketConnection = () => {
    useEffect(() => {
        FriendRequestsSocketService.onCreated((request) => {
            MeStore.addFriendRequest(request);
        });

        FriendRequestsSocketService.onCanceled((requestId: string) => {
            MeStore.deleteFriendRequest(requestId);
        });

        FriendRequestsSocketService.onAccepted(({ requestId, newFriend }) => {
            MeStore.deleteFriendRequest(requestId);
            MeStore.addFriend(newFriend);
        });
    }, []);
};

export default useFriendRequestsSocketConnection;
