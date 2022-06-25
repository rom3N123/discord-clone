import { MenuItemVariant } from '_types/components/menuItem';
import { MenuItemProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export type StyledMenuItemProps = MenuItemProps & {
    variant?: MenuItemVariant;
    title: string;
    icon?: ReactNode;
};
