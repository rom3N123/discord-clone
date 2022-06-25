import { ButtonProps } from '@chakra-ui/react';

interface FriendsPageHeaderButtonProps extends ButtonProps {
	id: string;
	label: string;
	isActive?: boolean;
}

export type { FriendsPageHeaderButtonProps };
