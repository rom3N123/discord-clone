import { FieldValues, UseFormReturn } from 'react-hook-form';
import { CommonInput } from '_types/common';
import { FormRedirectProps } from '../../_shared/FormRedirect/FormRedirect.types';

type SimpleFormProps<T extends FieldValues = FieldValues> = {
	inputs: CommonInput[];
	formTitle: string;
	onSubmit: (data: T) => Promise<void> | void;
	buttonSubmitTitle: string;
	validationSchema: any;
	onSubmitError?: (error: unknown, form: UseFormReturn<any>) => void;
	formRedirect?: FormRedirectProps;
	formSubtitle?: string;
};

export type { SimpleFormProps };
