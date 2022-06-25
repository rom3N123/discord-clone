import { AppSidebarItemProps } from '_/_components/_shared/AppSidebar/components/AppSidebarItem/AppSidebarItem.types';

type OnItemClick = (id: string) => void;

interface AppSidebarItemWithBarProps
	extends Omit<AppSidebarItemProps, 'onClick'> {
	isActive?: boolean;
	id: string;
	onClick: OnItemClick;
	offsetX?: string;
}

export type { OnItemClick, AppSidebarItemWithBarProps };
