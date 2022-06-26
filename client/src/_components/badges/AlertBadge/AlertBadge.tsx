import { Flex } from '@chakra-ui/react';
import React, { FC, ReactElement } from 'react';
import { BadgeProps } from '../Badges.types';

const AlertBadge: FC<BadgeProps> = ({
    amount,
    ...otherProps
}): ReactElement => {
    return (
        <Flex
            pointerEvents='none'
            color='app.text.primary'
            fontWeight='700'
            w='15px'
            h='15px'
            bg='app.status.error.primary'
            borderRadius='8px'
            fontSize='12px'
            align='center'
            justify='center'
            {...otherProps}
        >
            {amount > 9 ? '9+' : amount}
        </Flex>
    );
};

export default AlertBadge;
