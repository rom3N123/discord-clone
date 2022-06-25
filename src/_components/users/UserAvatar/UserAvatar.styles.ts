import { AvatarProps } from '@chakra-ui/react';
import { UserStatus } from '_/_types/common';

const onlineStyles: AvatarProps = {
	bg: 'green',
	borderWidth: '0',
};

const offlineStyles: AvatarProps = {
	bg: 'app.background.primary',
	borderColor: 'app.text.muted',
	borderWidth: '2px',
};

const styleByStatus: Record<UserStatus, AvatarProps> = {
	online: onlineStyles,
	offline: offlineStyles,
};

export { styleByStatus, onlineStyles, offlineStyles };
