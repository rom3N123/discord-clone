import MeStore from '_store/@meStore';
import { useEffect } from 'react';
import FriendsSocketService from '_/_api/_ws/socketServices/FriendsSocketService';

const useFriendsSocketConnection = () => {
	useEffect(() => {
		FriendsSocketService.onDelete(friendId => {
			MeStore.deleteFriend(friendId);
		});
	}, []);
};

export default useFriendsSocketConnection;
