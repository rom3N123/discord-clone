import { AppSidebarItemWithBarProps } from '../components/AppSidebarItemWithBar/AppSidebarItemWithBar.types';

type AppSidebarNavigationItemType = 'channel' | 'system';

type OnNavigationItemClick = (item: AppSidebarNavigationItem) => void;

interface AppSidebarNavigationItem
	extends Omit<AppSidebarItemWithBarProps, 'onClick'> {
	type: AppSidebarNavigationItemType;
	route: string;
	onClick?: OnNavigationItemClick;
}

export type { AppSidebarNavigationItem, OnNavigationItemClick };
