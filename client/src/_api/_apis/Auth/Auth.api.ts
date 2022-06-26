import api from '_http/api';
import {
    AuthLoginByAccessTokenResponse,
    AuthLoginByCredentialsResponse,
    AuthRegisterResponse,
} from '.';
import { UserCreateDto, UserCredentials } from '@discord-clone/types';

export default class AuthApi {
    public static loginByCredentials(
        data: UserCredentials
    ): Promise<AuthLoginByCredentialsResponse> {
        return api.post('auth/login', data);
    }

    public static register(data: UserCreateDto): Promise<AuthRegisterResponse> {
        return api.post('auth/register', data);
    }

    public static loginByAccessToken(): Promise<AuthLoginByAccessTokenResponse> {
        return api.get('auth/login');
    }
}
