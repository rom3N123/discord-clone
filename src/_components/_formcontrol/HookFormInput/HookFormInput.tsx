import React, { forwardRef, ReactElement } from 'react';
import InputWithHelperText from '../InputWithHelperText';
import * as T from './HookFormInput.types';

const HookFormInput = forwardRef<HTMLInputElement, T.HookFormInputProps>(
    (
        { name, errors, helperText, helperTextType, ...otherProps },
        ref
    ): ReactElement => {
        const error = errors?.[name];

        return (
            <InputWithHelperText
                ref={ref}
                isInvalid={Boolean(error)}
                text={helperText || error?.message}
                helperTextType={helperTextType}
                name={name}
                {...otherProps}
            />
        );
    }
);

export default HookFormInput;
