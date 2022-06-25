import { ChannelClient } from '@discord-clone/types';
import { AppSidebarItemWithBarProps } from '../AppSidebar/components/AppSidebarItemWithBar/AppSidebarItemWithBar.types';

type ChannelItemProps = AppSidebarItemWithBarProps & ChannelClient;

export type { ChannelItemProps };
