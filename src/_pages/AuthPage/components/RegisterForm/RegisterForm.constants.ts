import { UserCreateDto } from '@discord-clone/types/src/modules/users';
import { Inputs } from '_types/common';
import * as yup from 'yup';

const registerFormFields: Inputs<Omit<UserCreateDto, 'bio'>> = [
    {
        name: 'name',
        label: 'Имя',
    },
    {
        name: 'password',
        label: 'Пароль',
        type: 'password',
    },
    {
        name: 'email',
        label: 'E-mail',
    },
];

const registerFormValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Введите корректный адрес')
        .required('Обязательное поле'),
    password: yup
        .string()
        .min(8, 'Короткий пароль')
        .required('Обязательное поле'),
});

export { registerFormFields, registerFormValidationSchema };
