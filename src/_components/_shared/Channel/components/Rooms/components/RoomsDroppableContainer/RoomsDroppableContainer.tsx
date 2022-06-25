import React, { FC, MouseEvent, ReactElement } from 'react';
import { Box, Button, Collapse, Flex, Text } from '@chakra-ui/react';
import useToggle from '_hooks/useToggle';
import * as T from './RoomsDroppableContainer.types';
import { ChevronDownIcon, AddIcon } from '@chakra-ui/icons';
import { styleBy } from '_styles/chakra/helpers';
import { openIconStyle } from './RoomsDroppableContainer.styles';
import IconButtonWithTooltip from '_/_components/_buttons/IconButtonWithTooltip';

const RoomsDroppableContainer: FC<T.RoomsDroppableContainerProps> = ({
	label,
	children,
}): ReactElement => {
	const [areRoomsToggled, toggleRooms] = useToggle(true);

	const onPlusClickHandler = (event: MouseEvent) => {
		event.stopPropagation();
	};

	return (
		<Box>
			<Flex
				width='100%'
				as={Button}
				padding='0 0 0 5px'
				variant='ghost'
				color='app.channels.default'
				onClick={toggleRooms}
				align='center'
				justify='space-between'
			>
				<Flex align='center' padding='0' flexGrow='1'>
					<ChevronDownIcon
						transition='all .1s ease'
						sx={styleBy(areRoomsToggled, openIconStyle)}
					/>

					<Text
						color='inherit'
						fontSize='12px'
						fontWeight='700'
						textTransform='uppercase'
					>
						{label}
					</Text>
				</Flex>

				<IconButtonWithTooltip
					label='Создать канал'
					color='inherit'
					onClick={onPlusClickHandler}
					aria-label='Open menu'
				>
					<AddIcon width='12px' height='12px' />
				</IconButtonWithTooltip>
			</Flex>

			<Collapse in={areRoomsToggled}>{children}</Collapse>
		</Box>
	);
};

export default RoomsDroppableContainer;
