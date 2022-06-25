import { autorun, reaction } from 'mobx';
import { useEffect } from 'react';
import UsersOnlineSocketService from '_/_api/_ws/socketServices/UsersOnlineSocketService';
import MeStore from '_store/@meStore';

const useFriendsOnlineSocketConnection = () => {
    useEffect(() => {
        UsersOnlineSocketService.onIsOnline(({ userId, isOnline }) => {
            const user = MeStore.friendsById[userId];

            if (user) {
                MeStore.updateFriend(user._id, { ...user, isOnline });
            }
        });
    }, []);
};

export default useFriendsOnlineSocketConnection;
