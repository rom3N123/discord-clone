import React, { FC, ReactElement } from 'react';
import LoadingBar from '_/_components/loaders/LoadingBar';
import LoadingScreen from '_/_components/loaders/LoadingScreen';

const Loaders: FC = (): ReactElement => {
	return (
		<>
			<LoadingScreen />
			<LoadingBar />
		</>
	);
};

export default Loaders;
