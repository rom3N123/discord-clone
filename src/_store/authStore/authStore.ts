import { UserCredentials } from '@discord-clone/types';
import { makeAutoObservable } from 'mobx';
import MeStore from '../@meStore';
import AuthApi, {
    AuthLoginByCredentialsResponse,
    AuthLoginByAccessTokenResponse,
} from '_apis/Auth';
import authStore from './authStore';
import loadingStore from '../loadingStore';

class AuthStore {
    public isAuth: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    private saveAuthData(data: AuthLoginByCredentialsResponse['data']): void {
        const { accessToken, user } = data;
        MeStore.setClient(data);
        localStorage.token = accessToken;
        localStorage.user = user;
    }

    async loginByCredentials(data: UserCredentials) {
        const response = await AuthApi.loginByCredentials(data);

        this.saveAuthData(response.data);

        authStore.isAuth = true;

        return response;
    }

    async loginByAccessToken(): Promise<
        AuthLoginByAccessTokenResponse | undefined
    > {
        try {
            const response = await AuthApi.loginByAccessToken();

            const { data } = response;

            MeStore.setClient(data);

            authStore.isAuth = true;

            return response;
        } catch (error) {
            console.error(error);
        } finally {
            loadingStore.setIsLoadingWithScreen(false);
        }
    }
}

export default new AuthStore();
