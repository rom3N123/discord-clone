import { FC } from 'react';
import { AbstractModel } from '_types/common';

type FriendsUsersListProps = {
	title: string;
	items: AbstractModel[];
	UserListItem: FC<{ item: AbstractModel }>;
};

export type { FriendsUsersListProps };
