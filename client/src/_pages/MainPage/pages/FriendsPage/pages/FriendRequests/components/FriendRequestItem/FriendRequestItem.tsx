import React, { FC, ReactElement } from 'react';
import FriendRequestsSocketService from '_/_api/_ws/socketServices/FriendRequestsSocketService/FriendRequests.socketService';
import UserRequestListItem from '_/_components/_shared/Items/UserItems/UserRequestListItem';
import { UserRequestListItemProps } from '_/_components/_shared/Items/UserItems/UserRequestListItem/UserRequestListItem.types';
import * as T from './FriendRequestItem.types';

const FriendRequestItem: FC<T.FriendRequestItemProps> = (
    props
): ReactElement => {
    const {
        item: { _id },
    } = props;

    const onAcceptClick: UserRequestListItemProps['onAcceptClick'] = () => {
        FriendRequestsSocketService.accept(_id);
    };

    const onCancelClick: UserRequestListItemProps['onCancelClick'] = () => {
        FriendRequestsSocketService.cancel(_id);
    };

    return (
        <UserRequestListItem
            onAcceptClick={onAcceptClick}
            onCancelClick={onCancelClick}
            {...props}
        />
    );
};

export default FriendRequestItem;
