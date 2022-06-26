import React, { FC, ReactElement } from 'react';
import UserListItem from '../UserListItem';
import * as T from './UserRequestListItem.types';
import { Flex, Text } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import meStore from '_store/@meStore';
import DeleteButton from '_components/_buttons/DeleteButton';
import AcceptButton from '_components/_buttons/AcceptButton';

const UserRequestListItem: FC<T.UserRequestListItemProps> = observer(
    ({
        item: { requestTo, requestBy },
        onAcceptClick,
        onCancelClick,
    }): ReactElement => {
        let userToShow = requestTo;

        const isRequestToMe = requestTo._id === meStore.user._id;

        if (isRequestToMe) {
            userToShow = requestBy;
        }

        return (
            <UserListItem
                user={userToShow}
                center={
                    <Flex direction='column' justify='space-between'>
                        <Text fontWeight={600}>{userToShow.name}</Text>

                        <Text fontSize={12} color='app.text.secondary'>
                            {isRequestToMe
                                ? 'Запрос дружбы'
                                : 'Исходящий запрос дружбы'}
                        </Text>
                    </Flex>
                }
                end={
                    <Flex align='center' gap='10px'>
                        {isRequestToMe && (
                            <AcceptButton
                                withStopPropagation
                                onClick={onAcceptClick}
                                aria-label='Accept'
                                data-testid='accept-btn'
                            />
                        )}

                        <DeleteButton
                            withStopPropagation
                            data-testid='cancel-btn'
                            onClick={onCancelClick}
                        />
                    </Flex>
                }
            />
        );
    }
);

export default UserRequestListItem;
