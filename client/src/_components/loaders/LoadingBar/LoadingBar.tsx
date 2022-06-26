import React, { FC, ReactElement } from 'react';
import { Box, Fade } from '@chakra-ui/react';
import { BarLoader } from 'react-spinners';
import { observer } from 'mobx-react-lite';
import { loadingStore } from '_store';
import { colors } from '_styles/chakra/theme/colors';

const LoadingBar: FC = observer((): ReactElement => {
    return (
        <Fade in={loadingStore.isLoadingWithBar}>
            <Box
                pointerEvents='none'
                zIndex='1000'
                position='fixed'
                width='100%'
                top='0'
                left='0'
                height='100px'
            >
                <BarLoader
                    width='100%'
                    css='display:block'
                    color={colors.app.background.accent.primary}
                />
            </Box>
        </Fade>
    );
});

export default LoadingBar;
