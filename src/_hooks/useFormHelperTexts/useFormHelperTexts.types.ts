import { FieldValues } from 'react-hook-form';
import { TypeOrNull } from '_types/helperTypes';
import { SystemStatus } from '_types/common';
import {
	HookFormInputHelperTextProps,
	HookFormInputProps,
} from '_/_components/_formcontrol/HookFormInput/HookFormInput.types';

export type UseFormMessage = TypeOrNull<{
	type: SystemStatus;
	message: TypeOrNull<string>;
}>;

export type UseFormMessages<F extends FieldValues> = Record<
	keyof F,
	UseFormMessage
>;

export type SetUseFormMessage<F extends FieldValues> = (
	name: keyof F,
	message: UseFormMessage
) => void;

export type UseFormHelperTextsRegister<F extends FieldValues> = (
	name: keyof F
) => HookFormInputHelperTextProps & {
	onInputBlur: HookFormInputProps['onInputBlur'];
};

export type UseFormHelperTextsReturn<F extends FieldValues> = {
	setFormMessage: SetUseFormMessage<F>;
	messages: UseFormMessages<F>;
	register: UseFormHelperTextsRegister<F>;
};
