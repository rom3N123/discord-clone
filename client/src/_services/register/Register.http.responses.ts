import { MeClient, WithAccessToken } from '@discord-clone/types';
import { AxiosResponse } from 'axios';

type RegisterResponse = AxiosResponse<WithAccessToken<MeClient>>;

export type { RegisterResponse };
