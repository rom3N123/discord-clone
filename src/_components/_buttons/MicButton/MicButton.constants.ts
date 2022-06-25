import { MediaControlButtonProxy } from '_/_types/components/mediaControl';
import { ReactComponent as MicOffIcon } from '_icons/media/micOff.svg';
import { ReactComponent as MicOnIcon } from '_icons/media/micOn.svg';

const buttonDataByState: MediaControlButtonProxy = {
	off: {
		Icon: MicOffIcon,
		tooltip: 'Включить микрофон',
	},
	on: {
		Icon: MicOnIcon,
		tooltip: 'Выключить микрофон',
	},
};

export { buttonDataByState };
