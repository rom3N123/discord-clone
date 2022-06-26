import React, { FC, ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import { OnNavigationItemClick } from './items/items.types';
import { useNavigate } from 'react-router-dom';
import AppSidebarSystemItems from './components/AppSidebarSystemItems';
import AppSidebarChannels from './components/AppSidebarChannels';

const px: number = 12;
const padding: string = `${px}px`;

const AppSidebar: FC = (): ReactElement => {
    const navigate = useNavigate();

    const onItemClickHandler: OnNavigationItemClick = (item) => {
        navigate(item.route);
    };

    return (
        <Box height='100%' p={padding} bg='app.background.dark'>
            <AppSidebarSystemItems onItemClick={onItemClickHandler} />

            <AppSidebarChannels />
        </Box>
    );
};

export default AppSidebar;
