import { Flex } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import ChannelItem from '_shared/ChannelItem';
import meStore from '_store/@meStore';

const AppSidebarChannels: FC = observer((): ReactElement => {
    const navigate = useNavigate();

    return (
        <Flex direction='column' gap='10px'>
            {meStore.channels.map(({ _id, name }) => (
                <ChannelItem
                    onClick={() => {
                        navigate(`/channel/${_id}`);
                    }}
                    _id={_id}
                    name={name}
                />
            ))}
        </Flex>
    );
});

export default AppSidebarChannels;
