import { autorun, reaction } from 'mobx';
import { useEffect } from 'react';
import UsersOnlineSocketService from '_/_api/_ws/socketServices/UsersOnlineSocketService';
import { friendsStore } from '_store';

const useFriendsOnlineSocketConnection = () => {
    useEffect(() => {
        UsersOnlineSocketService.onIsOnline(({ userId, isOnline }) => {
            const user = friendsStore.friendsById[userId];

            if (user) {
                friendsStore.updateFriend(user._id, { ...user, isOnline });
            }
        });
    }, []);
};

export default useFriendsOnlineSocketConnection;
