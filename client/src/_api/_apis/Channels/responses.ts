import { ChannelClient, ChannelType } from '@discord-clone/types';
import { AxiosResponse } from 'axios';

export type ChannelsGetResponse = AxiosResponse<ChannelClient<ChannelType>[]>;

export type ChannelGetResponse = AxiosResponse<ChannelClient<ChannelType>>;
