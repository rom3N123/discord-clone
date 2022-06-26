import { FC, ReactElement } from 'react';
import { observer } from 'mobx-react-lite';
import FriendsUsersList from '_components/_friends/FriendsUsersList/FriendsUsersList';
import { friendRequestsStore } from '_store';
import FriendRequestItem from './components/FriendRequestItem';

const FriendRequests: FC = observer((): ReactElement => {
    return (
        <FriendsUsersList
            title='Ожидание'
            UserListItem={FriendRequestItem}
            items={friendRequestsStore.friendRequests}
        />
    );
});

export default FriendRequests;
