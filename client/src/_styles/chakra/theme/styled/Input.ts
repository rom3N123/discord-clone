import { ComponentStyleConfig } from '@chakra-ui/theme';
import { inputBorderStyles } from '../../helperStyles';

const Input: ComponentStyleConfig = {
    baseStyle: {
        field: {
            color: 'app.text.secondary',
            borderRadius: '3px',
            _placeholder: {
                color: 'app.text.muted',
            },
            _disabled: {
                opacity: '0.6',
            },
        },
    },
    variants: {
        filled: {
            field: {
                bg: 'app.gray.secondary',
                borderRadius: '3px',
                _hover: {
                    bg: 'app.gray.secondary',
                },
                _invalid: {
                    ...inputBorderStyles.invalid,
                },
            },
        },
        dark: ({ theme: { colors } }) => ({
            field: {
                bg: 'app.background.primary',
                borderRadius: '3px',
                _hover: {
                    bg: 'app.background.primary',
                },
                _focus: {
                    ...inputBorderStyles.focus,
                },
                border: `1px solid ${colors.gray['900']}`,
                _invalid: {
                    ...inputBorderStyles.invalid,
                },
            },
        }),
    },
    defaultProps: {
        variant: 'filled',
    },
};

export { Input };
