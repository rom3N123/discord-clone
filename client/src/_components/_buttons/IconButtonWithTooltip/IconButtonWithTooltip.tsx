import React, { FC, ReactElement } from 'react';
import { IconButton, IconButtonProps, Tooltip } from '@chakra-ui/react';
import * as T from './IconButtonWithTooltip.types';

const IconButtonWithTooltip: FC<T.IconButtonWithTooltipProps> = ({
    placement,
    label,
    children,
    withStopPropagation,
    onClick,
    ...otherProps
}): ReactElement => {
    const onClickHandler: IconButtonProps['onClick'] = (event) => {
        if (withStopPropagation) {
            event.stopPropagation();
        }

        onClick?.(event);
    };

    return (
        <Tooltip hasArrow label={label} placement={placement}>
            <IconButton aria-label='' onClick={onClickHandler} {...otherProps}>
                {children}
            </IconButton>
        </Tooltip>
    );
};

export default IconButtonWithTooltip;
