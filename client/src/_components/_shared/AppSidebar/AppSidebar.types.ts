import { RefAttributes, ForwardRefExoticComponent } from 'react';
import { AppSidebarNavigationItem } from './items/items.types';

type OnAppSidebarItemClick = (item: AppSidebarNavigationItem) => any;
interface AppSidebarRenderItem {
	item: AppSidebarNavigationItem;
	Component: ForwardRefExoticComponent<
		AppSidebarNavigationItem & RefAttributes<HTMLDivElement>
	>;
	tooltip?: string;
	needDivider?: boolean;
}

type AppSidebarItemByRoute = {
	[k: string]: AppSidebarRenderItem;
};

export type {
	AppSidebarRenderItem,
	OnAppSidebarItemClick,
	AppSidebarItemByRoute,
};
