import React, { FC, ReactElement } from 'react';
import { ReactComponent as SettingIcon } from '_icons/settings.svg';
import IconButtonWithTooltip from '../IconButtonWithTooltip';
import { IconButtonWithTooltipProps } from '../IconButtonWithTooltip/IconButtonWithTooltip.types';

const SettingButton: FC<IconButtonWithTooltipProps> = (props): ReactElement => {
	return (
		<IconButtonWithTooltip {...props}>
			<SettingIcon />
		</IconButtonWithTooltip>
	);
};

export default SettingButton;
