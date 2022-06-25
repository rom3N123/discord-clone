import { ComponentStyleConfig } from '@chakra-ui/theme';

const Button: ComponentStyleConfig = {
	baseStyle: {
		borderRadius: '4px',
		minWidth: '40px',
		fontWeight: '600',
		_focus: {
			boxShadow: 'none',
		},
		_disabled: {
			pointerEvents: 'none',
		},
	},
	sizes: {
		sm: {
			height: '24px',
			px: '8px',
			py: '2px',
		},
		md: {
			height: '32px',
			px: '10px',
			py: '6px',
		},
	},
	variants: {
		ghost: {
			bg: 'transparent',
			color: 'app.text.secondary',
			_hover: {
				bg: 'whiteAlpha.200',
				color: 'whiteAlpha.800',
			},
			_active: {
				background: 'whiteAlpha.300',
				color: 'white',
			},
		},
		success: {
			bg: 'app.status.success.primary',
			color: 'white',
			_hover: {
				bg: 'app.status.success.dark',
			},
			_active: {
				bg: 'app.status.success.darker',
			},
		},
		error: {
			bg: 'app.status.error.primary',
			color: 'app.text.primary',
			_hover: {
				bg: 'app.status.error.dark',
			},
			_active: {
				bg: 'app.status.error.darker',
			},
		},
		errorOutline: ({ theme: { colors } }) => {
			return {
				bg: 'transparent',
				color: 'app.status.error.primary',
				_hover: {
					bg: 'transparent',
				},
				border: `1px solid ${colors!.app.status.error.primary}`,
				_active: {
					bg: 'app.status.error.light',
				},
			};
		},
		blue: {
			bg: 'app.background.accent.primary',
			color: 'app.text.primary',
			fontWeight: 400,
			_hover: {
				bg: 'app.background.accent.dark',
			},
			_active: {
				bg: 'app.background.accent.darker',
			},
		},
		dark: {
			width: '36px',
			height: '36px',
			bg: 'app.background.primary',
			borderRadius: '50%',
			transition: 'all .1s ease',
			svg: {
				color: 'app.icons.gray',
			},
			_active: {
				bg: 'whiteAlpha.100',
			},
		},
	},
	defaultProps: {
		size: 'md',
		variant: 'ghost',
	},
};

export { Button };
