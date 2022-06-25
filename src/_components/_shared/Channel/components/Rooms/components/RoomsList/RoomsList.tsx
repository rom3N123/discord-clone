import React, { FC, ReactElement } from 'react';
import { Flex } from '@chakra-ui/react';
import TextRoomsList from './components/TextRoomsList';
import VoiceRoomsList from './components/VoiceRoomsList';

const RoomsList: FC = (): ReactElement => {
	return (
		<Flex direction='column' gap='16px'>
			<TextRoomsList />

			<VoiceRoomsList />
		</Flex>
	);
};

export default RoomsList;
