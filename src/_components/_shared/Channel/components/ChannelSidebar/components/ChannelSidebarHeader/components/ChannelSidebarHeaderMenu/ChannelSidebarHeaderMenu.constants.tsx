import { MenuItem } from '_types/components/menuItem';
import { ReactComponent as LeaveIcon } from '_icons/menu/leave.svg';

export const channelSidebarHeaderMenuItems: MenuItem[] = [
	{
		id: 'invite',
		title: 'Пригласить людей',
	},
	{
		id: 'settings',
		title: 'Настройки сервера',
	},
	{
		id: 'create',
		title: 'Создать канал',
	},
	{
		id: 'leave',
		title: 'Покинуть сервер',
		variant: 'error',
		icon: <LeaveIcon />,
	},
];
