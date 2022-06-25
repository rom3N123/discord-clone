import { observer } from 'mobx-react-lite';
import React, { FC, ReactElement } from 'react';
import FriendItem from '_/_components/_friends/FriendsUsersList/components/FriendItem';
import MeStore from '_/_store/@meStore';
import FriendsUsersList from '_components/_friends/FriendsUsersList/FriendsUsersList';

const AllFriendsPage: FC = observer((): ReactElement => {
	return (
		<FriendsUsersList
			title='Друзья'
			UserListItem={FriendItem}
			items={MeStore.friendsList}
		/>
	);
});

export default AllFriendsPage;
