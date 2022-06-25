import { InputProps, TextProps } from '@chakra-ui/react';
import { SystemStatus } from '_/_types/common';

type InputWithHelperTextProps = InputProps &
	TextProps & {
		text?: string;
		helperTextType?: SystemStatus;
		onInputBlur?: () => void;
		label?: string;
	};

export type { InputWithHelperTextProps };
