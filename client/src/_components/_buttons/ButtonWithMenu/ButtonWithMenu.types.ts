import { StyledMenuItemProps } from '_shared/StyledMenuItem/StyledMenuItem.types';
import { IconButtonWithTooltipProps } from '../IconButtonWithTooltip/IconButtonWithTooltip.types';

export type ButtonWithMenuProps = IconButtonWithTooltipProps & {
    items: StyledMenuItemProps[];
};
