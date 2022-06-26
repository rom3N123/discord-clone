import { IconButtonProps, TooltipProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type IconButtonWithTooltipProps = Omit<IconButtonProps, 'aria-label'> &
    Omit<TooltipProps, 'children'> & {
        children?: ReactNode;
        withStopPropagation?: boolean;
    };

export type { IconButtonWithTooltipProps };
