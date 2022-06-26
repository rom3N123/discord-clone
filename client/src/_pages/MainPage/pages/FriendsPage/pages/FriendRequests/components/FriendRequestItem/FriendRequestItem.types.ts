import { UserRequestListItemProps } from '_/_components/_shared/Items/UserItems/UserRequestListItem/UserRequestListItem.types';

type FriendRequestItemProps = Omit<
    UserRequestListItemProps,
    'onAcceptClick' | 'onCancelClick'
>;

export type { FriendRequestItemProps };
