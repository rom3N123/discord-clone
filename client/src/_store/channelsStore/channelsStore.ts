import { ChannelClient, ChannelType } from '@discord-clone/types';
import { makeAutoObservable } from 'mobx';
import ChannelsApi from '_apis/Channels';
import { loadingStore } from '..';

type ChannelClientType = ChannelClient<ChannelType>;

class ChannelsStore {
    areChannelsLoading = false;
    channels: ChannelClientType[] = [];
    channel: ChannelClientType;

    constructor() {
        makeAutoObservable(this);
    }

    setChannel(channel: ChannelClientType) {
        this.channel = channel;
    }

    setChannels(channels: ChannelClientType[]) {
        this.channels = channels;
    }

    setAreChannelsLoading(isLoading: boolean) {
        this.areChannelsLoading = isLoading;
    }

    async fetchChannels(): Promise<ChannelClientType[] | undefined> {
        try {
            this.setAreChannelsLoading(true);

            const { data } = await ChannelsApi.fetchChannels();

            this.setChannels(data);

            return data;
        } catch (error) {
            console.error(error);
        } finally {
            this.setAreChannelsLoading(false);
        }
    }

    async fetchChannelById(
        channelId: string
    ): Promise<ChannelClientType | undefined> {
        try {
            loadingStore.setIsLoadingWithBar(true);

            const { data } = await ChannelsApi.fetchChannel(channelId);

            this.setChannel(data);

            return data;
        } catch (error) {
            console.error(error);
        } finally {
            loadingStore.setIsLoadingWithBar(false);
        }
    }
}

export const channelsStore = new ChannelsStore();
