import React, { FC, ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import AuthBg from '_icons/authBg.png';
import LoginForm from './components/LoginForm/LoginForm';
import ScreenFormContainer from '_/_components/_formcontrol/ScreenFormContainer';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import { AnimatePresence } from 'framer-motion';

const AuthPage: FC = (): ReactElement => {
	const location = useLocation();

	return (
		<Box
			height='100vh'
			width='100vw'
			backgroundImage={`url(${AuthBg})`}
			backgroundPosition='center'
			backgroundSize='cover'
			backgroundRepeat='no-repeat'
		>
			<ScreenFormContainer>
				<AnimatePresence exitBeforeEnter>
					<Routes location={location} key={location.pathname}>
						<Route path='login' element={<LoginForm />} />
						<Route path='register' element={<RegisterForm />} />

						<Route path='*' element={<Navigate to='login' />} />
					</Routes>
				</AnimatePresence>
			</ScreenFormContainer>
		</Box>
	);
};

export default AuthPage;
