import React, { FC, ReactElement } from 'react';
import { UserCreateDto } from '@discord-clone/types';
import SimpleForm from '_/_components/_formcontrol/SimpleForm';
import * as C from './RegisterForm.constants';
import { SubmitHandler } from 'react-hook-form';
import RegisterAppService from '_services/register/Register.app.service';
import { handleFormRequestErrors } from '_/_components/_formcontrol/SimpleForm/SimpleForm.constants';
import AppearTransition from '_transitions/AppearTransition';

const RegisterForm: FC = (): ReactElement => {
	const onRegisterFormSubmit: SubmitHandler<UserCreateDto> = async data => {
		return RegisterAppService.register(data);
	};

	return (
		<AppearTransition>
			<SimpleForm<UserCreateDto>
				inputs={C.registerFormFields}
				buttonSubmitTitle='Зарегистрироваться'
				formTitle='Создать учётную запись'
				onSubmit={onRegisterFormSubmit}
				validationSchema={C.registerFormValidationSchema}
				onSubmitError={handleFormRequestErrors}
				formRedirect={{
					to: '/auth/login',
					linkLabel: 'Войти!',
					textLabel: 'Есть учётная запись?',
				}}
			/>
		</AppearTransition>
	);
};

export default RegisterForm;
