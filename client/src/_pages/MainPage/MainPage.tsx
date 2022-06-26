import React, { FC, ReactElement } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import MainPageSidebar from './components/MainPageSidebar';

const MainPage: FC = (): ReactElement => {
    return (
        <Flex height='100%'>
            <MainPageSidebar />

            <Box flexGrow='1'>
                <Outlet />
            </Box>
        </Flex>
    );
};

export default MainPage;
