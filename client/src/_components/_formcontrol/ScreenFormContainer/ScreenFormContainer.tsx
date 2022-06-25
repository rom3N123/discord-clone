import React, { FC, ReactElement } from 'react';
import { Flex } from '@chakra-ui/react';
import { absoluteCenterStyles } from '_/_styles/chakra/helperStyles';

const ScreenFormContainer: FC = ({ children }): ReactElement => {
	return (
		<Flex
			width={{
				base: '100%',
				md: '500px',
			}}
			height={{
				base: '100%',
				md: 'auto',
			}}
			{...absoluteCenterStyles}
		>
			{children}
		</Flex>
	);
};

export default ScreenFormContainer;
