import React, { FC, ReactElement } from 'react';
import { Menu, MenuList } from '@chakra-ui/react';
import StyledMenuItem from '_shared/StyledMenuItem';
import * as T from './ButtonWithMenu.types';
import IconButtonWithTooltip from '../IconButtonWithTooltip';
import CenteredMenuButton from './components/CenteredMenuButton';

const ButtonWithMenu: FC<T.ButtonWithMenuProps> = ({
    items,
    ...otherProps
}): ReactElement => {
    return (
        <Menu isLazy>
            <IconButtonWithTooltip
                variant='dark'
                as={CenteredMenuButton}
                {...otherProps}
            />

            <MenuList>
                {items.map((item) => (
                    <StyledMenuItem key={item.title} {...item} />
                ))}
            </MenuList>
        </Menu>
    );
};

export default ButtonWithMenu;
