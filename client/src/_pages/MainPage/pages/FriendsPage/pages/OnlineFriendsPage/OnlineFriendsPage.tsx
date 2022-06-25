import { observer } from 'mobx-react-lite';
import React, { FC, ReactElement } from 'react';
import FriendsUsersList from '_/_components/_friends/FriendsUsersList';
import FriendItem from '_/_components/_friends/FriendsUsersList/components/FriendItem';
import MeStore from '_/_store/@meStore';

const OnlineFriendsPage: FC = observer((): ReactElement => {
	return (
		<FriendsUsersList
			title='В сети'
			UserListItem={FriendItem}
			items={MeStore.onlineFriendsList}
		/>
	);
});

export default OnlineFriendsPage;
