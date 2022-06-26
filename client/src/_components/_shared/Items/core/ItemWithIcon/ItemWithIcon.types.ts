import { FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ItemWithIconProps extends FlexProps {
    start: ReactNode;
    center: ReactNode;
    end?: ReactNode;
}

export type { ItemWithIconProps };
