import React, { FC, ReactElement } from 'react';
import { Flex, IconButton, Tooltip } from '@chakra-ui/react';
import * as C from './CallButtons.constants';

const CallButtons: FC = (): ReactElement => {
	return (
		<Flex align='center'>
			{C.buttons.map(({ Icon, tooltip, onClick }) => (
				<Tooltip key={tooltip} label={tooltip}>
					<IconButton size='lg' onClick={onClick}>
						<Icon />
					</IconButton>
				</Tooltip>
			))}
		</Flex>
	);
};

export default CallButtons;
