import { useEffect } from 'react';
import { authStore, loadingStore } from '_store';

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
