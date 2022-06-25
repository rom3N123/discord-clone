import React, { FC, ReactElement } from 'react';
import { Input, InputProps } from '@chakra-ui/react';
import * as T from './ChatInput.types';

const ChatInput: FC<T.ChatInputProps> = ({
	value,
	onChange,
	onSubmit,
}): ReactElement => {
	const onKeyDown: InputProps['onKeyPress'] = (event): void => {
		const { key } = event;

		if (key === 'Enter') {
			onSubmit(value);
		}
	};

	return (
		<Input
			value={value}
			onChange={onChange}
			placeholder='Написать'
			onKeyPress={onKeyDown}
			variant='filled'
		/>
	);
};

export default ChatInput;
