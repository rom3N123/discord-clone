import React, { FC, ReactElement } from 'react';
import FriendsSocketService from '_/_api/_ws/socketServices/FriendsSocketService';
import ThreeDotsButton from '_/_components/_buttons/ThreeDotsButton';
import { StyledMenuItemProps } from '_/_components/_shared/StyledMenuItem/StyledMenuItem.types';
import callStore from '_/_store/callStore';
import * as T from './FriendThreeDotsButton.types';

const FriendThreeDotsButton: FC<T.FriendThreeDotsButtonProps> = ({
	user,
}): ReactElement => {
	const onDelete = () => {
		FriendsSocketService.delete(user._id);
	};

	const onStartCall = () => {
		callStore.callUser(user);
	};

	const buttonItems: StyledMenuItemProps[] = [
		{
			title: 'Начать видеозвонок',
			onClick: onStartCall,
		},
		{
			title: 'Начать голосовой звонок',
			onClick: onStartCall,
		},
		{
			title: 'Удалить из друзей',
			variant: 'error',
			onClick: onDelete,
		},
	];

	return <ThreeDotsButton items={buttonItems} />;
};

export default FriendThreeDotsButton;
