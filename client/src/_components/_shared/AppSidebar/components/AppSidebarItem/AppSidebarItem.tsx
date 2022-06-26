import React, { forwardRef, ReactElement } from 'react';
import { Box, CSSObject } from '@chakra-ui/react';
import { AppSidebarItemProps } from './AppSidebarItem.types';
import { styleBy } from '_/_styles/chakra/helpers';

const appSidebarItemSize: number = 48;

const activeStyles: CSSObject = {
    borderRadius: '25%',
    backgroundColor: 'app.background.accent.primary',
};

const AppSidebarItem = forwardRef<HTMLDivElement, AppSidebarItemProps>(
    ({ children, isActive, ...otherProps }, ref): ReactElement => {
        return (
            <Box
                ref={ref}
                as='button'
                width={`${appSidebarItemSize}px`}
                height={`${appSidebarItemSize}px`}
                borderRadius='50%'
                transition='all 0.3s ease'
                bg='app.background.primary'
                sx={styleBy(isActive, activeStyles)}
                _hover={activeStyles}
                cursor='pointer'
                {...otherProps}
            >
                {children}
            </Box>
        );
    }
);

export { appSidebarItemSize };

export default AppSidebarItem;
