import { WithAccessToken, MeClient } from '@discord-clone/types';
import { AxiosResponse } from 'axios';

type AuthLoginByCredentialsResponse = AxiosResponse<WithAccessToken<MeClient>>;

type AuthRegisterResponse = AxiosResponse<WithAccessToken<MeClient>>;

type AuthLoginByAccessTokenResponse = AxiosResponse<MeClient>;

type RegisterResponse = AxiosResponse<WithAccessToken<MeClient>>;

export type {
    AuthLoginByCredentialsResponse,
    AuthLoginByAccessTokenResponse,
    AuthRegisterResponse,
    RegisterResponse,
};
