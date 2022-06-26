import { FC, ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import RoomsList from './components/RoomsList';

const Rooms: FC = (): ReactElement => {
    return (
        <Box>
            <RoomsList />
        </Box>
    );
};

export default Rooms;
