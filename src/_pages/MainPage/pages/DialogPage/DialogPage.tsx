import React, { FC, ReactElement } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import ChatInput from '_/_components/chat/ChatInput';
import { ChatInputProps } from '_/_components/chat/ChatInput/ChatInput.types';
import Call from '_/_components/_shared/Call/Call';
import useBind from '_/_hooks/useBind';
import { User, users } from '_/_mocks/user';
import DialogPageHeader from './components/DialogPageHeader/DialogPageHeader';
import useDialogPageHeaderButtons from './hooks/useDialogPageHeaderButtons';

const mockUser: User = users[0];

const onCallBg: string = 'blackAlpha.600';

const DialogPage: FC = (): ReactElement => {
	const { isCalling, onButtonClick } = useDialogPageHeaderButtons();
	const { bind } = useBind();

	const onSubmit: ChatInputProps['onSubmit'] = value => {
		console.log(value);
	};

	return (
		<Flex height='100%' direction='column'>
			<DialogPageHeader
				bg={isCalling ? onCallBg : 'app.background.secondary'}
				onButtonClick={onButtonClick}
			/>

			<Flex padding='16px' flexGrow='1' position='relative'>
				{isCalling && (
					<Box width='100%' height='100%' position='absolute' top='0' left='0'>
						<Call bg={onCallBg} />
					</Box>
				)}

				<Box width='100%' alignSelf='end'>
					<ChatInput onSubmit={onSubmit} {...bind()} />
				</Box>
			</Flex>
		</Flex>
	);
};

export default DialogPage;
