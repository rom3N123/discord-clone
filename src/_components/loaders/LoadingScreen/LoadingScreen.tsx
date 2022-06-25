import React, { FC, ReactElement } from 'react';
import { Fade, Flex } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { BeatLoader } from 'react-spinners';
import loadingStore from '_/_store/loadingStore';

const LoadingScreen: FC = observer((): ReactElement | null => {
	if (!loadingStore.isLoadingWithScreen) {
		return null;
	}

	return (
		<Fade in>
			<Flex
				zIndex='1000'
				position='fixed'
				height='100vh'
				top='0'
				left='0'
				width='100vw'
				align='center'
				justify='center'
				bg='app.background.primary'
				boxShadow='box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;'
			>
				<BeatLoader size={24} color='#fff' />
			</Flex>
		</Fade>
	);
});

export default LoadingScreen;
