import { SystemStatus } from '_types/common';
import { FieldErrors } from 'react-hook-form';
import { InputWithHelperTextProps } from '../InputWithHelperText/InputWithHelperText.types';

type HookFormInputHelperTextProps = {
    helperText?: string;
    helperTextType?: SystemStatus;
};

type HookFormInputProps = InputWithHelperTextProps &
    HookFormInputHelperTextProps & {
        errors: FieldErrors;
        name: string;
    };

export type { HookFormInputProps, HookFormInputHelperTextProps };
