import { getInputBorderStyle } from './helpers';
import { StyleProps } from '@chakra-ui/react';

const absoluteCenterStyles: StyleProps = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

const inputBorderStyles = {
    focus: getInputBorderStyle('#3182ce'),
    invalid: getInputBorderStyle('#e53e3e'),
    valid: getInputBorderStyle('rgba(87, 242, 135, 65%)'),
};

export { absoluteCenterStyles, inputBorderStyles };
