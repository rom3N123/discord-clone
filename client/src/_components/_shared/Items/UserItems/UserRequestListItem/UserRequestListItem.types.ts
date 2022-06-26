import { EmptyFunc } from '_/_types/helperTypes';
import { UserFriendRequestClient } from '@discord-clone/types';
import { UserListItemProps } from '../UserListItem/UserListItem.types';

type UserRequestListItemProps = Omit<
    UserListItemProps,
    'center' | 'end' | 'onClick' | 'item' | 'user'
> & {
    item: UserFriendRequestClient;
    onAcceptClick: EmptyFunc;
    onCancelClick: EmptyFunc;
};

export type { UserRequestListItemProps };
