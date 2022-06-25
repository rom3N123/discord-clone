import React, { FC, ReactElement } from 'react';
import { CheckIcon } from '@chakra-ui/icons';
import IconButtonWithTooltip from '../IconButtonWithTooltip';
import { IconButtonWithTooltipProps } from '../IconButtonWithTooltip/IconButtonWithTooltip.types';

const AcceptButton: FC<IconButtonWithTooltipProps> = (props): ReactElement => {
	return (
		<IconButtonWithTooltip
			label='Применить'
			_hover={{ svg: { color: 'app.status.success.primary' } }}
			variant='dark'
			icon={<CheckIcon w={'16px'} h={'16px'} />}
			{...props}
		/>
	);
};

export default AcceptButton;
