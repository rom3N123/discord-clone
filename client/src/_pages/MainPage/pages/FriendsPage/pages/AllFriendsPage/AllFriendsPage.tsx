import { observer } from 'mobx-react-lite';
import React, { FC, ReactElement } from 'react';
import FriendItem from '_/_components/_friends/FriendsUsersList/components/FriendItem';
import { friendsStore } from '_store';
import FriendsUsersList from '_components/_friends/FriendsUsersList/FriendsUsersList';

const AllFriendsPage: FC = observer((): ReactElement => {
    return (
        <FriendsUsersList
            title='Друзья'
            UserListItem={FriendItem}
            items={friendsStore.friendsList}
        />
    );
});

export default AllFriendsPage;
