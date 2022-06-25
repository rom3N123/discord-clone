import React, { FC, ReactElement } from 'react';
import { Flex } from '@chakra-ui/react';
import ChannelContentHeader from './components/ChannelContentHeader';
import useToggle from '_hooks/useToggle';

const ChannelContent: FC = (): ReactElement => {
    const [areParticipantsToggled, toggleParticipants] = useToggle(true);

    return (
        <Flex height='100%' flexGrow='1' direction='column'>
            <ChannelContentHeader
                areParticipantsToggled={areParticipantsToggled}
                toggleParticipants={toggleParticipants}
            />
        </Flex>
    );
};

export default ChannelContent;
