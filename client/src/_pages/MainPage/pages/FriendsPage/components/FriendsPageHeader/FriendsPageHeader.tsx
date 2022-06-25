import React, { FC, ReactElement } from 'react';
import { FriendsIcon } from '_pages/MainPage/components/MainPageSidebar/MainPageSidebar.icons';
import { Divider, Flex, Text } from '@chakra-ui/react';
import * as C from './FriendsPageHeader.constants';
import { renderComponentOrItemMapFunc } from '_/_helpers';
import FriendsPageHeaderButton from './components/FriendsPageHeaderButton';

const FriendsPageHeader: FC = (): ReactElement => {
	return (
		<Flex height='48px' align='center' as='header'>
			<Flex gap='5px' color='app.text.primary' align='center'>
				<FriendsIcon />
				<Text fontWeight='600' fontSize='16px' lineHeight='20px'>
					Друзья
				</Text>
			</Flex>

			<Divider orientation='vertical' opacity='0.2' mx='20px' height='50%' />

			{C.headerCenterButtons.map(
				renderComponentOrItemMapFunc({
					fallbackComponent: FriendsPageHeaderButton,
				})
			)}
		</Flex>
	);
};

export default FriendsPageHeader;
