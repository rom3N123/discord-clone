import React, { FC, ReactElement } from 'react';
import { Divider, Text } from '@chakra-ui/react';
import * as T from './FriendsUsersList.types';

const FriendsUsersList: FC<T.FriendsUsersListProps> = ({
	title,
	items,
	UserListItem,
}): ReactElement => {
	return (
		<div>
			<Text
				color='app.header.secondary'
				marginBottom='16px'
				textTransform='uppercase'
				fontWeight={400}
				fontSize={13}
			>
				{title}{' '}
				<Text as='span' color='inherit' fontWeight={600}>
					- {items.length}
				</Text>
			</Text>

			<Divider borderColor='app.gray.dusk' width='100%' />

			<div>
				{items.map(item => (
					<UserListItem key={item._id} item={item} />
				))}
			</div>
		</div>
	);
};

export default FriendsUsersList;
