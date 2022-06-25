import { ComponentStyleConfig } from '@chakra-ui/theme';

const Text: ComponentStyleConfig = {
	baseStyle: {
		color: 'app.text.primary',
	},
	variants: {
		capitalLabel: {
			fontSize: '12px',
			lineHeight: '16px',
			color: 'app.text.secondary',
			textTransform: 'uppercase',
			fontWeight: 700,
		},
	},
};

export { Text };
