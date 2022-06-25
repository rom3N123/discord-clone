import { FlexProps } from '@chakra-ui/react';

type DialogPageHeaderProps = FlexProps & {
	onButtonClick: (id: string) => void;
};

export type { DialogPageHeaderProps };
