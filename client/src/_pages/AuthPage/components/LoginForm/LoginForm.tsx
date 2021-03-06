import React, { FC, ReactElement } from 'react';
import { SubmitHandler } from 'react-hook-form';
import * as T from './LoginForm.types';
import * as C from './LoginForm.constants';
import SimpleForm from '_/_components/_formcontrol/SimpleForm';
import { handleFormRequestErrors } from '_/_components/_formcontrol/SimpleForm/SimpleForm.constants';
import AppearTransition from '_transitions/AppearTransition';
import { authStore } from '_store';

const LoginForm: FC = (): ReactElement => {
    const onFormSubmit: SubmitHandler<T.LoginFormInputs> = (
        data
    ): Promise<any> => {
        return authStore.loginByCredentials(data);
    };

    return (
        <AppearTransition>
            <SimpleForm<T.LoginFormInputs>
                buttonSubmitTitle='Вход'
                formTitle='С возвращением!'
                formSubtitle='Мы так рады видеть вас снова!'
                inputs={C.loginFormFields}
                validationSchema={C.loginFormValidationSchema}
                onSubmit={onFormSubmit}
                onSubmitError={handleFormRequestErrors}
                formRedirect={{
                    linkLabel: 'Зарегистрироваться',
                    textLabel: 'Нужна учётная запись?',
                    to: '/auth/register',
                }}
            />
        </AppearTransition>
    );
};

export default LoginForm;
