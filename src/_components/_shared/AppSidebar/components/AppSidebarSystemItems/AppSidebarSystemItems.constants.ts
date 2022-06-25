import {
    AppSidebarRenderItem,
    AppSidebarItemByRoute,
} from '../../AppSidebar.types';
import DiscordItem from '../../items/DiscordItem';

const appSidebarItemsByRoute: AppSidebarItemByRoute = {
    '/main': {
        item: {
            type: 'system',
            id: 'discord',
            route: '/main',
        },
        Component: DiscordItem,
        needDivider: true,
        tooltip: 'Главная',
    },
};

const appSidebarItems: AppSidebarRenderItem[] = Object.values(
    appSidebarItemsByRoute
);

export { appSidebarItems, appSidebarItemsByRoute };
