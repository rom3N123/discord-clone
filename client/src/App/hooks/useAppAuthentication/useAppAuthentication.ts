import loadingStore from '_store/loadingStore';
import { useEffect } from 'react';
import AuthApi from '_apis/Auth/Auth.api';

const useAppAuthentication = () => {
    useEffect(() => {
        if (localStorage.token) {
            AuthApi.loginByAccessToken();
        } else {
            loadingStore.setIsLoadingWithScreen(false);
        }
    }, []);
};

export default useAppAuthentication;
