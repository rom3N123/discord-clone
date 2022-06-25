import React, { FC, ReactElement } from 'react';
import { Box, Flex, Text, Tooltip } from '@chakra-ui/react';
import { ReactComponent as PlusIcon } from '_icons/plus.svg';
import UserItem from '_components/users/UserItem';
import * as T from './Dialogs.types';

const Dialogs: FC<T.DialogsProps> = ({ onUserItemClick }): ReactElement => {
	return (
		<Box>
			<Flex align='center' justify='space-between'>
				<Text
					fontSize='12px'
					color='app.text.secondary'
					fontWeight='700'
					textTransform='uppercase'
				>
					Личные сообщения
				</Text>

				<Box color='app.text.primary' as='button'>
					<Tooltip hasArrow label='Добавить'>
						<div>
							<PlusIcon width='16' height='16' />
						</div>
					</Tooltip>
				</Box>
			</Flex>

			<Box mt='10px'>
				{/* {users.map(user => (
					<UserItem key={user.id} onClick={onUserItemClick} {...user} />
				))} */}
			</Box>
		</Box>
	);
};

export default Dialogs;
