import loadingStore from '_store/loadingStore';
import { useEffect } from 'react';
import AuthAppService from '_services/auth/Auth.app.service';

const useAppAuthentication = () => {
	useEffect(() => {
		if (localStorage.token) {
			AuthAppService.loginByAccessToken();
		} else {
			loadingStore.setIsLoadingWithScreen(false);
		}
	}, []);
};

export default useAppAuthentication;
