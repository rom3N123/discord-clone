import { useState, useEffect } from 'react';
import UsersOnlineSocketService from '_/_api/_ws/socketServices/UsersOnlineSocketService';
import useDidMount from '_/_hooks/useDidMount';

export type UseIsUserOnlineReturn = {
	isOnline: boolean;
	isPending: boolean;
};

const useIsUserOnline = (userId: string) => {
	const isMounted = useDidMount();
	const [isOnline, setIsOnline] = useState<boolean>(false);
	const [isPending, setIsPending] = useState<boolean>(true);

	useEffect(() => {
		UsersOnlineSocketService.getIsUserOnline(userId);

		UsersOnlineSocketService.onIsUserOnline(userId, isOnline => {
			setIsOnline(isOnline);
		});
	}, []);

	useEffect(() => {
		if (!isMounted && isOnline) {
			setIsPending(false);
		}
	}, [isOnline]);

	return { isOnline, isPending };
};

export default useIsUserOnline;
