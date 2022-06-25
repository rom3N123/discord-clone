import React, { FC, ReactElement } from 'react';
import { Button, Text } from '@chakra-ui/react';
import ItemWithIcon from '_/_components/_shared/Items/core/ItemWithIcon';
import UserAvatar from '../UserAvatar';
import * as T from './UserItem.types';

const UserItem: FC<T.UserItemProps> = ({
    _id,
    name,
    onClick,
    ...otherProps
}): ReactElement => {
    const onClickHandler = (): void => {
        onClick?.(_id);
    };

    return (
        <ItemWithIcon
            start={<UserAvatar avatar={''} status={'offline'} />}
            center={
                <Text color='app.text.secondary' fontWeight='500'>
                    {name}
                </Text>
            }
            as={Button}
            onClick={onClickHandler}
            {...otherProps}
        />
    );
};

export default UserItem;
