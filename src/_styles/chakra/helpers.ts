import { CSSObject } from '@chakra-ui/react';
import { theme } from '@chakra-ui/react';

const styleBy = (
    condition: Boolean | undefined,
    style: CSSObject,
    fallback: CSSObject = {}
): CSSObject => (condition ? style : fallback);

export const getInputBorderStyle = (borderColor: string) => ({
    boxShadow: `0 0 0 1px ${borderColor}`,
    borderColor,
});

export { styleBy };
