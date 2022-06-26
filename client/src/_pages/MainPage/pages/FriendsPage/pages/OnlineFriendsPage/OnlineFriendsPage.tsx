import React, { FC, ReactElement } from 'react';
import { observer } from 'mobx-react-lite';
import FriendsUsersList from '_components/_friends/FriendsUsersList';
import FriendItem from '_components/_friends/FriendsUsersList/components/FriendItem';
import { friendsStore } from '_store';

const OnlineFriendsPage: FC = observer((): ReactElement => {
    return (
        <FriendsUsersList
            title='В сети'
            UserListItem={FriendItem}
            items={friendsStore.onlineFriendsList}
        />
    );
});

export default OnlineFriendsPage;
