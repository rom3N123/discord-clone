import { SHADOW_HIGH } from './../shadows';
import { ComponentStyleConfig } from '@chakra-ui/theme';

const Popover: ComponentStyleConfig = {
	baseStyle: {
		content: {
			border: '0',
			backgroundColor: 'app.float.primary',
			_focus: {
				boxShadow: 'none',
			},
			boxShadow: SHADOW_HIGH,
			borderRadius: '4px',
		},
	},
	defaultProps: {},
};

export { Popover };
