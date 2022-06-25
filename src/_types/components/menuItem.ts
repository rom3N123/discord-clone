import { ReactNode } from 'react';

export type MenuItemVariant = 'default' | 'error' | 'success';

export type MenuItem = {
	id: string;
	title: string;
	icon?: ReactNode;
	variant?: MenuItemVariant;
	color?: string;
};
