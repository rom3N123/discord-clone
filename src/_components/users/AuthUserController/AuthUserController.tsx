import React, { FC, ReactElement } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import UserAvatar from '../UserAvatar';
import AuthUserControllerButtons from './components/AuthUserControllerButtons';
import { observer } from 'mobx-react-lite';
import meStore from '_store/@meStore';

const AuthUserController: FC = observer((): ReactElement => {
	const { name } = meStore.user;

	return (
		<Flex
			bg='app.background.darkLight'
			align='center'
			justify='space-between'
			height='52px'
			p='8px'
		>
			<Flex align='center' gap='8px'>
				<UserAvatar
					status='online'
					avatar='https://i1.sndcdn.com/artworks-0HGMzw31cZZwE4b6-NbgLDw-t500x500.jpg'
				/>

				<Text fontSize='14px' fontWeight='600'>
					{name}
				</Text>
			</Flex>

			<AuthUserControllerButtons />
		</Flex>
	);
});

export default AuthUserController;
