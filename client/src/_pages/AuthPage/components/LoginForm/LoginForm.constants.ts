import * as yup from 'yup';
import { CommonInput } from '_/_types/common';

const loginFormValidationSchema = yup.object().shape({
	email: yup
		.string()
		.email('Введите корректный адрес')
		.required('Обязательное поле'),
	password: yup.string().required('Обязательное поле'),
});

const loginFormFields: CommonInput[] = [
	{
		name: 'email',
		label: 'Адрес электронной почты',
	},
	{
		name: 'password',
		label: 'Пароль',
		type: 'password',
	},
];

export { loginFormValidationSchema, loginFormFields };
