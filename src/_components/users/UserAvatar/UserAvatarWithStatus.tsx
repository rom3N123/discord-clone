import React, { FC, ReactElement } from 'react';
import { UserClient } from '@discord-clone/types';
import UserAvatar from './UserAvatar';
import { UserAvatarProps } from './UserAvatar.types';

type UserAvatarWithStatusProps = Omit<UserAvatarProps, 'status'> & {
    user: UserClient;
};

const UserAvatarWithStatus: FC<UserAvatarWithStatusProps> = (
    props
): ReactElement => {
    const {
        user: { isOnline },
    } = props;

    return <UserAvatar {...props} status={isOnline ? 'online' : 'offline'} />;
};

export default UserAvatarWithStatus;
