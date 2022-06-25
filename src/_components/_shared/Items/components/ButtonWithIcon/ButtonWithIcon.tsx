import React, { FC, ReactElement } from 'react';
import ItemWithIcon from '_/_components/_shared/Items/core/ItemWithIcon';
import * as T from './ButtonWithIcon.types';
import * as S from './ButtonWithIcon.styles';
import { styleBy } from '_/_styles/chakra/helpers';
import { Button } from '@chakra-ui/react';

const ButtonWithIcon: FC<T.ButtonWithIconProps> = ({
	center,
	start,
	isActive,
	...otherProps
}): ReactElement => {
	return (
		<ItemWithIcon
			sx={styleBy(isActive, S.activeStyles)}
			start={start}
			center={center}
			as={Button}
			borderRadius='4px'
			{...otherProps}
		/>
	);
};

export default ButtonWithIcon;
