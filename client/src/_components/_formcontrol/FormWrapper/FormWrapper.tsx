import React, { FC, ReactElement } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import * as T from './FormWrapper.types';

const FormWrapper: FC<T.FormWrapperProps> = ({
    title,
    subtitle,
    children,
}): ReactElement => {
    return (
        <Flex
            boxShadow='0 2px 10px 0 rgb(0 0 0 / 20%)'
            bg='app.background.secondary'
            p={{ base: '16px', md: '32px' }}
            borderRadius={{ base: '0', md: '5px' }}
            width='100%'
            direction='column'
            justify={{ base: 'center', md: 'start' }}
        >
            <Text
                as='h3'
                fontWeight='600'
                color='app.text.primary'
                fontSize='24px'
                lineHeight='30px'
                mb='8px'
                textAlign='center'
            >
                {title}
            </Text>

            {subtitle && (
                <Text
                    fontSize='16px'
                    lineHeight='20px'
                    color='app.text.secondary'
                    mb='20px'
                    textAlign='center'
                >
                    {subtitle}
                </Text>
            )}

            {children}
        </Flex>
    );
};

export default FormWrapper;
