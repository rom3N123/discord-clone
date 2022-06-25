import React, { FC, ReactElement } from 'react';
import UserListItem from '_/_components/_shared/Items/UserItems/UserListItem';
import FriendItemActions from './components/FriendItemActions';
import { FriendItemProps } from './FriendItem.types';

const FriendItem: FC<FriendItemProps> = ({ item }): ReactElement => {
	return <UserListItem user={item} end={<FriendItemActions user={item} />} />;
};

export default FriendItem;
