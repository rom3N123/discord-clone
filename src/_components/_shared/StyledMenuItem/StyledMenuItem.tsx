import React, { FC, ReactElement } from 'react';
import { Flex, MenuItem } from '@chakra-ui/react';
import * as C from './StyledMenuItem.constants';
import * as T from './StyledMenuItem.types';

const StyledMenuItem: FC<T.StyledMenuItemProps> = ({
    variant = 'default',
    title,
    icon,
    onClick,
    ...otherProps
}): ReactElement => {
    const onClickHandler: T.StyledMenuItemProps['onClick'] = (event) => {
        event.stopPropagation();
        onClick?.(event);
    };

    return (
        <MenuItem
            onClick={onClickHandler}
            {...C.MENU_ITEM_STYLES_BY_VARIANT[variant]}
            {...otherProps}
        >
            <Flex width='100%' align='center' justify='space-between'>
                {title} {icon}
            </Flex>
        </MenuItem>
    );
};

export default StyledMenuItem;
