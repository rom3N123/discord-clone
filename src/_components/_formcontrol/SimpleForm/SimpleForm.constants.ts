import { FormErrorResponse } from '@discord-clone/types/src/responses';
import { SimpleFormProps } from './SimpleForm.types';

export type FormRequestErrorHandler = Required<
	Pick<SimpleFormProps, 'onSubmitError'>
>;

export const handleFormRequestErrors: FormRequestErrorHandler['onSubmitError'] =
	(error, { setError }) => {
		const _error = error as FormErrorResponse;
		const fieldsErrors = _error.response?.data.errors;

		fieldsErrors?.forEach(({ name, message }) => {
			setError(name, {
				message,
			});
		});
	};
