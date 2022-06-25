import { useEffect } from 'react';
import { appSocket } from '_api/_ws/socketServices/app.socket';
import useFriendRequestsSocketConnection from './hooks/useFriendRequestsSocketConnection';
import useFriendsOnlineSocketConnection from './hooks/useFriendsOnlineSocketConnection';
import useFriendsSocketConnection from './hooks/useFriendsSocketConnection';

const useAppSocketConnection = () => {
	useEffect(() => {
		appSocket.connect();
	}, []);

	useFriendRequestsSocketConnection();

	useFriendsSocketConnection();

	useFriendsOnlineSocketConnection();
};

export default useAppSocketConnection;
