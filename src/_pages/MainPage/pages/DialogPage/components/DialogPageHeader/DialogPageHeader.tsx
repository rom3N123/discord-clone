import React, { FC, ReactElement } from 'react';
import { Box, Flex, IconButton, Text, Tooltip } from '@chakra-ui/react';
import MailIcon from '_icons/mail.svg';
import * as C from './DialogPageHeader.constants';
import * as T from './DialogPageHeader.types';
import { SHADOW_LOW } from '_/_styles/chakra/theme/shadows';

const DialogPageHeader: FC<T.DialogPageHeaderProps> = ({
    onButtonClick,
    ...otherProps
}): ReactElement => {
    return (
        <Flex
            align='center'
            as='header'
            height='48px'
            bg='app.background.secondary'
            padding='0 16px'
            justify='space-between'
            boxShadow={SHADOW_LOW}
            position='static'
            top='0'
            left='0'
            {...otherProps}
        >
            <Flex align='center' gap='10px'>
                <Box color='app.gray.primary'>
                    <MailIcon />
                </Box>
                <Text
                    as='h3'
                    fontWeight='600'
                    fontSize='16px'
                    lineHeight='20px'
                >
                    Roman4ik
                </Text>
            </Flex>

            <Flex>
                {C.buttons.map(({ id, Icon, tooltip }) => (
                    <Tooltip key={id} label={tooltip} hasArrow>
                        <IconButton
                            onClick={() => {
                                onButtonClick(id);
                            }}
                            size='md'
                        >
                            <Icon />
                        </IconButton>
                    </Tooltip>
                ))}
            </Flex>
        </Flex>
    );
};

export default DialogPageHeader;
