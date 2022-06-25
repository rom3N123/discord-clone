import React, { FC, ReactElement } from 'react';
import { APP_SIDEBAR_ACTIVE_BAR_X_OFFSET } from '../AppSidebar/AppSidebar.constants';
import AppSidebarItemWithBar from '../AppSidebar/components/AppSidebarItemWithBar';
import * as T from './ChannelItem.types';
import { Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const ChannelItem: FC<T.ChannelItemProps> = ({
    _id,
    name,
    ...otherProps
}): ReactElement => {
    const { channelId } = useParams();

    return (
        <AppSidebarItemWithBar
            offsetX={APP_SIDEBAR_ACTIVE_BAR_X_OFFSET}
            isActive={_id === channelId}
            {...otherProps}
        >
            <Text>{name}</Text>
        </AppSidebarItemWithBar>
    );
};

export default ChannelItem;
