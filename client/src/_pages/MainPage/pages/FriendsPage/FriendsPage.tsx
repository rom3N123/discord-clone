import React, { FC, ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import FriendsPageHeader from './components/FriendsPageHeader';
import { Outlet } from 'react-router-dom';
import Call from '_/_components/_shared/Call';
import { observer } from 'mobx-react-lite';
import callStore from '_/_store/callStore';

const FriendsPage: FC = observer((): ReactElement => {
	return (
		<Box
			bg='app.background.secondary'
			width='100%'
			height='100%'
			padding='0 16px'
		>
			<FriendsPageHeader />

			<Box padding='20px 30px'>
				{callStore.isOnCall ? <Call /> : <Outlet />}
			</Box>
		</Box>
	);
});

export default FriendsPage;
