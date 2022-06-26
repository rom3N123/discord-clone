import React, { FC, ReactElement } from 'react';
import ButtonWithMenu from '../ButtonWithMenu';
import { ThreeDotsButtonProps } from './ThreeDotsButton.type';
import ThreeDotsIcon from '_icons/threeDotsIcon.svg';
import { Icon } from '@chakra-ui/react';

const ThreeDotsButton: FC<ThreeDotsButtonProps> = ({
    items,
    ...buttonProps
}): ReactElement => {
    return (
        <ButtonWithMenu
            icon={<Icon as={ThreeDotsIcon} w={5} h={5} />}
            items={items}
            {...buttonProps}
        />
    );
};

export default ThreeDotsButton;
