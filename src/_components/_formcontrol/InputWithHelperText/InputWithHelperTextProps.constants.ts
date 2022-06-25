import { StyleProps } from '@chakra-ui/react';
import { SystemStatus } from '_/_types/common';

const textPropsByType: Record<SystemStatus, StyleProps> = {
	error: {
		color: 'red.500',
	},
	success: {
		color: 'app.status.success.primary',
	},
};

export { textPropsByType };
