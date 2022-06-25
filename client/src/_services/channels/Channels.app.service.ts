import loadingStore from '_store/loadingStore';
import channelsStore from '_store/channelsStore';
import { ChannelClient } from '@discord-clone/types';
import ChannelsHttpService from './Channels.http.service';

export default class ChannelsAppService {
	public static async fetchChannels(): Promise<ChannelClient[] | undefined> {
		try {
			channelsStore.areChannelsLoading = true;

			const { data } = await ChannelsHttpService.fetchChannels();

			channelsStore.setChannels(data);

			return data;
		} catch (error) {
			console.error(error);
		} finally {
			channelsStore.areChannelsLoading = false;
		}
	}

	public static async fetchChannelById(
		channelId: string
	): Promise<ChannelClient | undefined> {
		try {
			loadingStore.setIsLoadingWithBar(true);

			const { data } = await ChannelsHttpService.fetchChannel(channelId);

			channelsStore.setChannel(data);

			return data;
		} catch (error) {
			console.error(error);
		} finally {
			loadingStore.setIsLoadingWithBar(false);
		}
	}
}
