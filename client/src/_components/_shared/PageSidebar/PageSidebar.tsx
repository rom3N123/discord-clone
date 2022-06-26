import { FC, ReactElement } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import AuthUserController from '_components/users/AuthUserController';
import * as T from './PageSidebar.types';

const PageSidebar: FC<T.PageSidebarProps> = ({
    indent = '14px',
    children,
    ...otherProps
}): ReactElement => {
    return (
        <Flex
            direction='column'
            overflowY='auto'
            bg='app.background.primary'
            height='100%'
            width='100%'
            {...otherProps}
        >
            <Box flexGrow='1' p={indent}>
                {children}
            </Box>

            <AuthUserController />
        </Flex>
    );
};

export default PageSidebar;
