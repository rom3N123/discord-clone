import React, { FC, ReactElement } from 'react';
import { Avatar, AvatarBadge } from '@chakra-ui/react';
import * as T from './UserAvatar.types';
import { styleByStatus } from './UserAvatar.styles';

const UserAvatar: FC<T.UserAvatarProps> = ({
    avatar,
    status = 'offline',
    size = 32,
    ...otherProps
}): ReactElement => {
    const sx: string = `${size}px`;

    return (
        <Avatar
            loading='lazy'
            width={sx}
            height={sx}
            src={avatar}
            {...otherProps}
        >
            <AvatarBadge
                boxSize={`${Math.floor(size / 3)}px`}
                {...styleByStatus[status]}
            />
        </Avatar>
    );
};

export default UserAvatar;
