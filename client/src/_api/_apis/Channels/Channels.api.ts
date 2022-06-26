import api from '_http/api';
import { ChannelsGetResponse, ChannelGetResponse } from '.';

export default class ChannelsHttpService {
    public static fetchChannels(): Promise<ChannelsGetResponse> {
        return api.get('channels');
    }

    public static fetchChannel(channelId: string): Promise<ChannelGetResponse> {
        return api.get(`channels/${channelId}`);
    }
}
