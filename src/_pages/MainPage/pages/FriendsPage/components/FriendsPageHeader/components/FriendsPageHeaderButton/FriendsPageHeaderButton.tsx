import React, { FC, ReactElement } from 'react';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FriendsPageHeaderButtonProps } from '../../FriendsPageHeader.types';

const FriendsPageHeaderButton: FC<FriendsPageHeaderButtonProps> = ({
	id,
	label,
	...otherProps
}): ReactElement => {
	const navigate = useNavigate();

	const onButtonClick = (id: string) => () => {
		navigate(id);
	};

	return (
		<Button onClick={onButtonClick(id)} size='sm' mx='10px' {...otherProps}>
			{label}
		</Button>
	);
};

export default FriendsPageHeaderButton;
