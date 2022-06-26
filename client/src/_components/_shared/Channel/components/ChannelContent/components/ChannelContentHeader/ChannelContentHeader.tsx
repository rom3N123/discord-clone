import { FC, ReactElement } from 'react';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { SHADOW_LOW } from '_/_styles/chakra/theme/shadows';
import {
    HEADER_HEIGHT,
    HEADER_INDENT,
} from '_constants/styles/style.constants';
import TextRoomIcon from '_icons/rooms/textRoomIcon.svg';
import ChannelContentHeaderButtons from './components/ChannelContentHeaderButtons';
import * as T from './ChannelContentHeader.types';
import { stylesWithToggledParticipants } from './ChannelContentHeader.styles';
import { styleBy } from '_/_styles/chakra/helpers';

const ChannelContentHeader: FC<T.ChannelContentHeaderProps> = ({
    areParticipantsToggled,
    toggleParticipants,
}): ReactElement => {
    return (
        <Flex
            as='header'
            padding={HEADER_INDENT}
            height={`${HEADER_HEIGHT}px`}
            boxShadow={SHADOW_LOW}
            align='center'
            justify='space-between'
            sx={styleBy(areParticipantsToggled, stylesWithToggledParticipants)}
        >
            <Flex gap='5px' align='center' color='app.channels.default'>
                <Icon width='20px' height='20px' as={TextRoomIcon} />
                <Text fontWeight='700'>general</Text>
            </Flex>

            <ChannelContentHeaderButtons
                toggleParticipants={toggleParticipants}
            />
        </Flex>
    );
};

export default ChannelContentHeader;
