import React, { FC, ReactElement } from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import IconButtonWithTooltip from '../IconButtonWithTooltip';
import { IconButtonWithTooltipProps } from '../IconButtonWithTooltip/IconButtonWithTooltip.types';

const DeleteButton: FC<IconButtonWithTooltipProps> = (props): ReactElement => {
	return (
		<IconButtonWithTooltip
			label='Отменить'
			_hover={{ svg: { color: 'app.status.error.primary' } }}
			variant='dark'
			icon={<CloseIcon w={'14px'} h={'14px'} />}
			{...props}
		/>
	);
};

export default DeleteButton;
