import { Box } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';
import PageSidebar from '_shared/PageSidebar';
import ChannelsList from '../Rooms';
import ChannelSidebarHeader from './components/ChannelSidebarHeader';

const ChannelSidebar: FC = (): ReactElement => {
	return (
		<PageSidebar indent='0' width='240px'>
			<ChannelSidebarHeader name='Сервер Roman Martynov' />

			<Box padding='20px 10px'>
				<ChannelsList />
			</Box>
		</PageSidebar>
	);
};

export default ChannelSidebar;
