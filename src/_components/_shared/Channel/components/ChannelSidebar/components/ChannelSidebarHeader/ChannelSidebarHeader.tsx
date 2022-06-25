import { createElement, FC, ReactElement } from 'react';
import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuList,
    Text,
} from '@chakra-ui/react';
import {
    HEADER_HEIGHT,
    HEADER_INDENT,
} from '_constants/styles/style.constants';
import * as T from './ChannelSidebarHeader.types';
import ChannelSidebarHeaderMenu from './components/ChannelSidebarHeaderMenu';
import { ChevronDownIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { SHADOW_LOW } from '_styles/chakra/theme/shadows';

const ChannelSidebarHeader: FC<T.ChannelSidebarHeaderProps> = ({
    name,
}): ReactElement => {
    const onItemClick = (id: string) => () => {};

    return (
        <Box boxShadow={SHADOW_LOW}>
            <Menu isLazy>
                {({ isOpen }) => {
                    return (
                        <>
                            <MenuButton
                                overflow='hidden'
                                isActive={isOpen}
                                as={Button}
                                width='100%'
                                height={`${HEADER_HEIGHT}px`}
                                padding={HEADER_INDENT}
                                textAlign='start'
                                borderRadius='0'
                                rightIcon={createElement(
                                    isOpen ? SmallCloseIcon : ChevronDownIcon,
                                    {
                                        width: '22px',
                                        height: '22px',
                                    }
                                )}
                            >
                                <Text overflow='hidden' textOverflow='ellipsis'>
                                    {name}
                                </Text>
                            </MenuButton>

                            <MenuList>
                                <ChannelSidebarHeaderMenu
                                    onItemClick={onItemClick}
                                />
                            </MenuList>
                        </>
                    );
                }}
            </Menu>
        </Box>
    );
};

export default ChannelSidebarHeader;
