import React, { FC, ReactElement } from 'react';
import IconButtonWithTooltip from '../IconButtonWithTooltip';
import { IconButtonWithTooltipProps } from '../IconButtonWithTooltip/IconButtonWithTooltip.types';
import { ChatIcon } from '@chakra-ui/icons';

const MessageButton: FC<IconButtonWithTooltipProps> = (props): ReactElement => {
	return (
		<IconButtonWithTooltip
			withStopPropagation
			label='Сообщение'
			variant='dark'
			icon={<ChatIcon />}
			{...props}
		/>
	);
};

export default MessageButton;
