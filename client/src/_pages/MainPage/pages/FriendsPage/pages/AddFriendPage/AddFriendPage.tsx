import React, { FC, ReactElement, useEffect, useState } from 'react';
import {
	Box,
	Button,
	InputGroup,
	InputRightElement,
	Text,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AddFriendPageForm } from './AddFriendPage.types';
import { handleFormRequestErrors } from '_/_components/_formcontrol/SimpleForm/SimpleForm.constants';
import { FormErrorBody } from '@discord-clone/types';
import HookFormInput from '_/_components/_formcontrol/HookFormInput';
import { SocketResponseError } from '_/_types/responses';
import useFormHelperTexts from '_/_hooks/useFormHelperTexts';
import FriendRequestsSocketService from '_/_api/_ws/socketServices/FriendRequestsSocketService/FriendRequests.socketService';

const AddFriendPage: FC = (): ReactElement => {
	const form = useForm<AddFriendPageForm>();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = form;

	const {
		messages,
		register: registerHelperText,
		setFormMessage,
	} = useFormHelperTexts<AddFriendPageForm>();

	const onFriendRequestSend: SubmitHandler<AddFriendPageForm> = async ({
		requestTo,
	}: AddFriendPageForm) => {
		try {
			setIsSubmitting(true);

			FriendRequestsSocketService.socket.emit(
				FriendRequestsSocketService.emits.create,
				{ requestTo }
			);
		} catch (error) {
			handleFormRequestErrors(error, form);
		}
	};

	useEffect(() => {
		FriendRequestsSocketService.socket.on(
			FriendRequestsSocketService.emits.errors.create,
			(error: FormErrorBody | SocketResponseError) => {
				if (error.type === 'FormError') {
					handleFormRequestErrors(
						{
							response: {
								data: { errors: (error as FormErrorBody).errors },
							},
						},
						form
					);
				} else {
					setError('requestTo', {
						message: (error as SocketResponseError).message,
					});
				}

				setIsSubmitting(false);
			}
		);
	}, []);

	useEffect(() => {
		FriendRequestsSocketService.socket.on(`friends~canceled:success`, () => {
			setFormMessage('requestTo', {
				type: 'success',
				message: 'Request has been sent!',
			});
			setIsSubmitting(false);
		});
	}, []);

	const buttonVariant = messages.requestTo
		? 'success'
		: errors.requestTo
		? 'error'
		: 'blue';

	const isButtonDisabled: boolean =
		Boolean(messages.requestTo) || Boolean(isSubmitting || errors.requestTo);

	return (
		<form onSubmit={handleSubmit(onFriendRequestSend)}>
			<Box padding='20px 30px 20px 20px'>
				<Text
					textTransform='uppercase'
					fontSize='16px'
					mb='4px'
					fontWeight='500'
				>
					Add a friend
				</Text>

				<Text fontSize='14px' color='app.text.secondary'>
					Add your fiend by enter his id!
				</Text>

				<Box mt='16px'>
					<InputGroup>
						<HookFormInput
							width='100%'
							maxLength={50}
							borderRadius='8px'
							height='48px'
							variant='dark'
							placeholder='Enter user id'
							errors={errors}
							{...register('requestTo')}
							{...registerHelperText('requestTo')}
						/>

						<InputRightElement
							alignItems='center'
							paddingRight='10px'
							height='100%'
							width='200px'
						>
							<Button
								isLoading={isSubmitting}
								disabled={isButtonDisabled}
								type='submit'
								fontSize='14px'
								variant={buttonVariant}
								fontWeight='400'
							>
								Send friend request
							</Button>
						</InputRightElement>
					</InputGroup>
				</Box>
			</Box>
		</form>
	);
};

export default AddFriendPage;
