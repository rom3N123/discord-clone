import React, { FC, ReactElement } from 'react';
import { Flex } from '@chakra-ui/react';
import * as T from './ItemWithIcon.types';

const ItemWithIcon: FC<T.ItemWithIconProps> = ({
	start,
	center,
	end,
	...otherProps
}): ReactElement => {
	return (
		<Flex
			width='100%'
			height='42px'
			align='center'
			justify='space-between'
			padding='0 12px'
			{...otherProps}
		>
			<Flex align='center' gap='12px'>
				<Flex align='center' justify='center' width='32px' height='32px'>
					{start}
				</Flex>
				{center}
			</Flex>

			{end}
		</Flex>
	);
};

export default ItemWithIcon;
