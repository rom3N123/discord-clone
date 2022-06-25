import React, { FC, ReactElement } from 'react';
import { Flex } from '@chakra-ui/react';
import ChannelSidebar from './components/ChannelSidebar/ChannelSidebar';
import ChannelContent from './components/ChannelContent';

const Channel: FC = (): ReactElement => {
	return (
		<Flex height='100%'>
			<ChannelSidebar />

			<ChannelContent />
		</Flex>
	);
};

export default Channel;
