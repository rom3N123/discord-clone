import { MenuButton, MenuButtonProps } from '@chakra-ui/react';
import React, { FC, ReactElement } from 'react';

const CenteredMenuButton: FC<MenuButtonProps> = (props): ReactElement => {
    return (
        <MenuButton
            {...props}
            sx={{
                '& > span': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
            }}
        />
    );
};

export default CenteredMenuButton;
