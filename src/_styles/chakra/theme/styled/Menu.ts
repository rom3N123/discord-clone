import { SHADOW_HIGH } from './../shadows';
import { ComponentStyleConfig } from '@chakra-ui/theme';

export const Menu: ComponentStyleConfig = {
    baseStyle: {
        item: {
            borderRadius: '2px',
            color: 'app.text.secondary',
            fontSize: '14px',
            padding: '6px 8px',
            minHeight: '32px',
            transition: 'all .1s ease',
        },
        list: {
            border: '0',
            backgroundColor: 'app.float.primary',
            _focus: {
                boxShadow: 'none',
            },
            boxShadow: SHADOW_HIGH,
            borderRadius: '4px',
        },
    },
};
