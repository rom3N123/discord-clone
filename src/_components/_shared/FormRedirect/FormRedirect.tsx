import React, { FC, ReactElement } from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';
import * as T from './FormRedirect.types';
import { useNavigate } from 'react-router-dom';

const FormRedirect: FC<T.FormRedirectProps> = ({
    linkLabel,
    textLabel,
    to,
    ...flexProps
}): ReactElement => {
    const navigate = useNavigate();

    return (
        <Flex align='center' gap='5px' fontSize='14px' {...flexProps}>
            <Text color='app.text.muted'>{textLabel}</Text>

            <Link
                onClick={() => {
                    navigate(to);
                }}
            >
                {linkLabel}
            </Link>
        </Flex>
    );
};

export default FormRedirect;
