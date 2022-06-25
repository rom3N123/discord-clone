import { FieldValues } from 'react-hook-form';
import { useState } from 'react';
import {
	SetUseFormMessage,
	UseFormMessages,
	UseFormHelperTextsReturn,
	UseFormHelperTextsRegister,
} from './useFormHelperTexts.types';

const useFormHelperTexts = <
	F extends FieldValues
>(): UseFormHelperTextsReturn<F> => {
	const [messages, setMessages] = useState<UseFormMessages<F>>(
		() => ({} as UseFormMessages<F>)
	);

	const setFormMessage: SetUseFormMessage<F> = (name, message) => {
		setMessages(prevState => ({ ...prevState, [name]: message }));
	};

	const register: UseFormHelperTextsRegister<F> = name => ({
		onInputBlur: () => setFormMessage(name, null),
		helperText: messages[name]?.message,
		helperTextType: messages[name]?.type,
	});

	return { messages, register, setFormMessage };
};

export default useFormHelperTexts;
