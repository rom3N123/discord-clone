import React, { FC, ReactElement } from 'react';
import IconButtonWithTooltip from '../IconButtonWithTooltip';
import * as C from './MicButton.constants';
import { MediaControlProps } from '_types/components/mediaControl';

const MicButton: FC<MediaControlProps> = ({
    state = 'off',
    onClick,
}): ReactElement => {
    const { Icon, tooltip } = C.buttonDataByState[state];

    return (
        <IconButtonWithTooltip
            label={tooltip}
            onClick={() => {
                onClick(state);
            }}
        >
            <Icon />
        </IconButtonWithTooltip>
    );
};

export default MicButton;
