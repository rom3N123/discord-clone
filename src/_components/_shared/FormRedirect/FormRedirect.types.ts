import { FlexProps } from '@chakra-ui/react';

type FormRedirectProps = FlexProps & {
    textLabel: string;
    linkLabel: string;
    to: string;
};

export type { FormRedirectProps };
