import React, { FC, ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import * as T from './AppSidebarItemBar.types';

const AppSidebarItemBar: FC<T.AppSidebarItemBarProps> = ({
    ...props
}): ReactElement => {
    return (
        <Box
            position='absolute'
            bg='white'
            height='100%'
            width='5px'
            borderRadius='0 4px 4px 0'
            {...props}
        />
    );
};

export default AppSidebarItemBar;
