import React, { FC, ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import AlertBadge from '_/_components/badges/AlertBadge';
import FriendsPageHeaderButton from '../FriendsPageHeaderButton';
import { observer } from 'mobx-react-lite';
import MeStore from '_/_store/@meStore';

const PendingRequestsButton: FC = observer((): ReactElement => {
	return (
		<Box position='relative'>
			<FriendsPageHeaderButton id='list/requests' label='Ожидание' />

			{Boolean(MeStore.pendingRequests.length) && (
				<AlertBadge
					amount={MeStore.pendingRequests.length}
					position='absolute'
					top='0'
					right='0'
				/>
			)}
		</Box>
	);
});

export default PendingRequestsButton;
