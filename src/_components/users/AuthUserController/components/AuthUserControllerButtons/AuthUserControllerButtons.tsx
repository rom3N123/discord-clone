import { Flex } from '@chakra-ui/react';
import React, { FC, ReactElement } from 'react';
import * as C from './AuthUserControllerButtons.constants';

const AuthUserControllerButtons: FC = (): ReactElement => {
    return (
        <Flex align='center'>
            {C.authUserControllerButtons.map(({ Button, tooltip }) => (
                <Button key={tooltip} label={tooltip} />
            ))}
        </Flex>
    );
};

export default AuthUserControllerButtons;
