import React, { FC, ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import AlertBadge from '_/_components/badges/AlertBadge';
import FriendsPageHeaderButton from '../FriendsPageHeaderButton';
import { observer } from 'mobx-react-lite';
import { friendRequestsStore } from '_store';

const PendingRequestsButton: FC = observer((): ReactElement => {
    return (
        <Box position='relative'>
            <FriendsPageHeaderButton id='list/requests' label='Ожидание' />

            {Boolean(friendRequestsStore.pendingRequests.length) && (
                <AlertBadge
                    amount={friendRequestsStore.pendingRequests.length}
                    position='absolute'
                    top='0'
                    right='0'
                />
            )}
        </Box>
    );
});

export default PendingRequestsButton;
