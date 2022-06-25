import { useState } from 'react';
import { UseBindValue, EmptyFunc, OnChange, Bind } from './useBind.types';

const useBind = (initialValue: string = ''): UseBindValue => {
	const [value, setValue] = useState<string>(initialValue);

	const onChange: OnChange = ({ target: { value } }) => {
		setValue(value);
	};

	const clearValue: EmptyFunc = () => {
		setValue('');
	};

	const bind: Bind = () => ({
		value,
		onChange,
	});

	return {
		bind,
		value,
		clearValue,
	};
};

export default useBind;
