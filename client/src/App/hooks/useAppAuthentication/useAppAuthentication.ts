import loadingStore from '_store/loadingStore';
import { useEffect } from 'react';
import authStore from '_store/authStore';

const useAppAuthentication = () => {
    useEffect(() => {
        if (localStorage.token) {
            authStore.loginByAccessToken();
        } else {
            loadingStore.setIsLoadingWithScreen(false);
        }
    }, []);
};

export default useAppAuthentication;
