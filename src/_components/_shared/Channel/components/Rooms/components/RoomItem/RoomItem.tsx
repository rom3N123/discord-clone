import { Button, Flex, Text, Icon } from '@chakra-ui/react';
import React, { FC, ReactElement } from 'react';
import RoomItemEndButtons from './components/RoomItemEndButtons';
import { roomItemIconByAppearance } from './RoomItem.constants';
import * as T from './RoomItem.types';

const RoomItem: FC<T.RoomItemProps> = ({ appearance }): ReactElement => {
	const LeftIcon = roomItemIconByAppearance[appearance];

	return (
		<Flex
			color='app.channels.default'
			as={Button}
			width='100%'
			align='center'
			justify='space-between'
		>
			<Flex align='center' flexGrow='1' gap='5px'>
				<Icon width='20px' height='20px' as={LeftIcon} />

				<Text color='inherit' fontSize='14px'>
					Channel
				</Text>
			</Flex>

			<RoomItemEndButtons />
		</Flex>
	);
};

export default RoomItem;
