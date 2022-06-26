import { Flex } from '@chakra-ui/react';
import React, { FC, ReactElement } from 'react';
import MessageButton from '_/_components/_buttons/MessageButton';
import FriendThreeDotsButton from '../FriendThreeDotsButton';
import * as T from './FriendItemActions.types';

const FriendItemActions: FC<T.FriendItemActionsProps> = ({
    user,
}): ReactElement => {
    return (
        <Flex align='center' justify='center' gap='5px'>
            <MessageButton />

            <FriendThreeDotsButton user={user} />
        </Flex>
    );
};

export default FriendItemActions;
