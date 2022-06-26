import { FC, lazy, ReactElement } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import useAppSocketConnection from './hooks/useAppSocketConnection';

const AppSidebar = lazy(() => import('_shared/AppSidebar'));

const Layout: FC = (): ReactElement => {
    useAppSocketConnection();

    return (
        <Flex
            bg='app.background.secondary'
            overflow='hidden'
            height='100vh'
            width='100vw'
        >
            <AppSidebar />

            <Box flexGrow='1'>
                <Outlet />
            </Box>
        </Flex>
    );
};

export default Layout;
