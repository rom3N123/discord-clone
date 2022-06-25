import React, { forwardRef, ReactElement } from 'react';
import { Box, Input, Text } from '@chakra-ui/react';
import * as T from './InputWithHelperText.types';
import * as C from './InputWithHelperTextProps.constants';
import { styleBy } from '_/_styles/chakra/helpers';
import { inputBorderStyles } from '_/_styles/chakra/helperStyles';

const InputWithHelperText = forwardRef<
	HTMLInputElement,
	T.InputWithHelperTextProps
>(
	(
		{
			text,
			helperTextType = 'error',
			label,
			mb,
			onInputBlur,
			onBlur,
			...inputProps
		},
		ref
	): ReactElement => {
		const onBlurHandler: T.InputWithHelperTextProps['onBlur'] = event => {
			onBlur?.(event);
			onInputBlur?.();
		};

		return (
			<Box position='relative' width='100%' mb={mb}>
				{label && (
					<Text variant='capitalLabel' mb='5px'>
						{label}
					</Text>
				)}

				<Input
					ref={ref}
					sx={styleBy(helperTextType === 'success', inputBorderStyles.valid)}
					onBlur={onBlurHandler}
					{...inputProps}
				/>

				{text && (
					<Text
						position='absolute'
						top='100%'
						left='0'
						fontWeight='700'
						mt='5px'
						fontSize='12px'
						{...C.textPropsByType[helperTextType]}
					>
						{text}
					</Text>
				)}
			</Box>
		);
	}
);

export default InputWithHelperText;
