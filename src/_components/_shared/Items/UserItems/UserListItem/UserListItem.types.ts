import { UserClient } from '@discord-clone/types';
import { ReactNode } from 'react';

type UserListItemProps = {
    user: UserClient;
    center?: ReactNode;
    end?: ReactNode;
    onClick?: (user: UserClient) => any;
};

export type { UserListItemProps };
