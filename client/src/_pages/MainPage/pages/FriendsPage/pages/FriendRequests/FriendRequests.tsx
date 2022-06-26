import { FC, ReactElement } from 'react';
import { observer } from 'mobx-react-lite';
import FriendsUsersList from '_components/_friends/FriendsUsersList/FriendsUsersList';
import meStore from '_store/@meStore';
import FriendRequestItem from './components/FriendRequestItem';

const FriendRequests: FC = observer((): ReactElement => {
    return (
        <FriendsUsersList
            title='Ожидание'
            UserListItem={FriendRequestItem}
            items={meStore.friendRequests}
        />
    );
});

export default FriendRequests;
