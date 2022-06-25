import { Text } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';
import UserAvatarWithStatus from '_/_components/users/UserAvatar/UserAvatarWithStatus';
import ItemWithIcon from '../../core/ItemWithIcon';
import * as T from './UserListItem.types';

const UserListItem: FC<T.UserListItemProps> = ({
    user,
    center,
    end,
    onClick,
}): ReactElement => {
    const onClickHandler = () => {
        onClick?.(user);
    };

    return (
        <ItemWithIcon
            cursor='pointer'
            height='62px'
            borderRadius='8px'
            padding='0 20px'
            transition='all .1s ease'
            _hover={{ backgroundColor: '#40444B' }}
            center={center || <Text fontWeight={600}>{user.name}</Text>}
            start={<UserAvatarWithStatus user={user} />}
            onClick={onClickHandler}
            end={end}
        />
    );
};

export default UserListItem;
