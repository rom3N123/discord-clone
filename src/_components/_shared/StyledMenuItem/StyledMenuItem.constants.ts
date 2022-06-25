import { MenuItemVariant } from '_types/components/menuItem';

export const MENU_ITEM_STYLES_BY_VARIANT: Record<MenuItemVariant, object> = {
    error: {
        _hover: {
            backgroundColor: 'app.status.error.primary',
        },
        _focus: {
            backgroundColor: 'app.status.error.dark',
        },
        _active: { backgroundColor: 'app.status.error.darker' },
    },
    success: {
        _hover: {
            backgroundColor: 'app.status.success.primary',
        },
        _focus: {
            backgroundColor: 'app.status.success.primary',
        },
        _active: { backgroundColor: 'app.status.success.dark' },
    },
    default: {
        _hover: {
            backgroundColor: 'app.background.accent.dark',
        },
        _active: {
            backgroundColor: 'app.background.accent.darker',
        },
        _focus: {
            backgroundColor: 'app.background.accent.primary',
        },
    },
};
