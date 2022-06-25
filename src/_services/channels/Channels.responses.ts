import { ChannelClient } from '@discord-clone/types';
import { AxiosResponse } from 'axios';

export type ChannelsGetResponse = AxiosResponse<ChannelClient[]>;

export type ChannelGetResponse = AxiosResponse<ChannelClient>;
