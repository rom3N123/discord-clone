import React, { ReactElement } from 'react';
import { Button } from '@chakra-ui/react';
import FormWrapper from '_/_components/_formcontrol/FormWrapper';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import HookFormInput from '_/_components/_formcontrol/HookFormInput';
import { BeatLoader } from 'react-spinners';
import FormRedirect from '_/_components/_shared/FormRedirect';
import * as T from './SimpleForm.types';

function SimpleForm<F>({
    buttonSubmitTitle,
    formTitle,
    inputs,
    onSubmit,
    formRedirect,
    formSubtitle,
    validationSchema,
    onSubmitError,
}: T.SimpleFormProps<F>): ReactElement {
    const form = useForm<F>({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',
        reValidateMode: 'onBlur',
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = form;

    const onFormSubmit: SubmitHandler<F> = async (data): Promise<void> => {
        try {
            await onSubmit(data as F);
        } catch (error) {
            if (onSubmitError) {
                onSubmitError(error, form);
            }
        }
    };

    return (
        <FormWrapper title={formTitle} subtitle={formSubtitle}>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                {inputs.map(({ name, label, ...otherProps }) => (
                    <HookFormInput
                        key={name}
                        mb='20px'
                        variant='dark'
                        errors={errors}
                        label={label}
                        disabled={isSubmitting}
                        {...otherProps}
                        // @ts-ignore
                        {...register(name)}
                    />
                ))}

                <Button
                    isLoading={isSubmitting}
                    spinner={<BeatLoader color='#fff' size={12} />}
                    width='100%'
                    type='submit'
                    height='43px'
                    variant='blue'
                >
                    {buttonSubmitTitle}
                </Button>

                {formRedirect && (
                    <FormRedirect
                        mt='8px'
                        to={formRedirect.to}
                        linkLabel={formRedirect.linkLabel}
                        textLabel={formRedirect.textLabel}
                    />
                )}
            </form>
        </FormWrapper>
    );
}

export default SimpleForm;
