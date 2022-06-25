import { UserClient } from '@discord-clone/types';
import { UserStatus } from '_types/common';
import { AvatarProps } from '@chakra-ui/react';

type UserAvatarProps = AvatarProps & {
    status?: UserStatus;
    avatar?: string;
    size?: number;
};

export type { UserAvatarProps };
