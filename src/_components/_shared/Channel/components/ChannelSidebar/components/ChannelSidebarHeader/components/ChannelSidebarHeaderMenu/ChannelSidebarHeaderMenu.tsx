import { FC, ReactElement } from 'react';
import StyledMenuItem from '_shared/StyledMenuItem';
import * as C from './ChannelSidebarHeaderMenu.constants';

type ChannelSidebarHeaderMenuProps = {
    onItemClick: (id: string) => void;
};

const ChannelSidebarHeaderMenu: FC<ChannelSidebarHeaderMenuProps> = ({
    onItemClick,
}): ReactElement => {
    return (
        <>
            {C.channelSidebarHeaderMenuItems.map(
                ({ id, title, ...otherProps }) => (
                    <StyledMenuItem
                        onClick={onItemClick(id)}
                        title={title}
                        {...otherProps}
                    />
                )
            )}
        </>
    );
};

export default ChannelSidebarHeaderMenu;
