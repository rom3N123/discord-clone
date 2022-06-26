import { friendsStore } from '_store';
import { useEffect } from 'react';
import FriendsSocketService from '_/_api/_ws/socketServices/FriendsSocketService';

const useFriendsSocketConnection = () => {
    useEffect(() => {
        FriendsSocketService.onDelete((friendId) => {
            friendsStore.deleteFriend(friendId);
        });
    }, []);
};

export default useFriendsSocketConnection;
