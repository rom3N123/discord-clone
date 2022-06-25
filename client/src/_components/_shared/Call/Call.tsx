import React, { FC, ReactElement } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import CallButtons from './components/CallButtons';
import * as T from './Call.types';

const Call: FC<T.CallProps> = ({ ...otherProp }): ReactElement => {
	return (
		<Box
			bg='blackAlpha.600'
			width='100%'
			height='100%'
			minHeight='30%'
			maxHeight='70%'
			resize='vertical'
			overflow='hidden'
			{...otherProp}
		>
			<Flex
				height='100%'
				p='20px'
				align='center'
				direction='column'
				justify='center'
			>
				<Flex marginTop='auto'>
					<CallButtons />
				</Flex>
			</Flex>
		</Box>
	);
};

export default Call;
