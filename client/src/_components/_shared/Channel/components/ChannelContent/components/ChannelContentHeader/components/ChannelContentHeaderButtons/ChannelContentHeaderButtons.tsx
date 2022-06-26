import { ButtonGroup } from '@chakra-ui/react';
import React, { FC, ReactElement } from 'react';
import { CommonIconButton } from '_types/common';
import ParticipantsIcon from '_icons/channel/participants.svg';
import IconButtonWithTooltip from '_/_components/_buttons/IconButtonWithTooltip';
import * as T from './ChannelContentHeaderButtons.types';

const ChannelContentHeaderButtons: FC<T.ChannelContentHeaderButtonsProps> = ({
    toggleParticipants,
}): ReactElement => {
    const buttons: CommonIconButton[] = [
        {
            Icon: ParticipantsIcon,
            tooltip: 'Показать список участников',
            onClick: toggleParticipants,
        },
    ];

    return (
        <ButtonGroup>
            {buttons.map(({ Icon, tooltip, onClick }) => (
                <IconButtonWithTooltip
                    onClick={onClick}
                    placement='left'
                    label={tooltip}
                >
                    <Icon />
                </IconButtonWithTooltip>
            ))}
        </ButtonGroup>
    );
};

export default ChannelContentHeaderButtons;
