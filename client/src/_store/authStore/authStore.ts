import { UserCreateDto, UserCredentials } from '@discord-clone/types';
import { makeAutoObservable } from 'mobx';
import AuthApi, {
    AuthLoginByCredentialsResponse,
    AuthLoginByAccessTokenResponse,
    AuthRegisterResponse,
} from '_apis/Auth';
import { meStore, loadingStore } from '..';

class AuthStore {
    public isAuth: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    private saveAuthData(data: AuthLoginByCredentialsResponse['data']): void {
        const { accessToken, user } = data;
        meStore.setClient(data);
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

            meStore.setClient(data);

            authStore.isAuth = true;

            return response;
        } catch (error) {
            console.error(error);
        } finally {
            loadingStore.setIsLoadingWithScreen(false);
        }
    }

    async register(fields: UserCreateDto): Promise<AuthRegisterResponse> {
        const response = await AuthApi.register(fields);

        const { data } = response;

        localStorage.token = data.accessToken;

        meStore.setClient(data);

        return response;
    }
}

export const authStore = new AuthStore();
