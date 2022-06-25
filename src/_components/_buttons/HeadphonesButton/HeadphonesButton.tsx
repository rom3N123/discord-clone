import React, { FC, ReactElement } from 'react';
import { MediaControlProps } from '_types/components/mediaControl';
import IconButtonWithTooltip from '../IconButtonWithTooltip';
import * as C from './HeadphonesButton.constants';

const HeadphonesButton: FC<MediaControlProps> = ({
	state = 'off',
	onClick,
}): ReactElement => {
	const { Icon, tooltip } = C.buttonDataByState[state];

	return (
		<IconButtonWithTooltip label={tooltip} onClick={() => onClick(state)}>
			<Icon />
		</IconButtonWithTooltip>
	);
};

export default HeadphonesButton;
