import { MediaControlButtonProxy } from '_/_types/components/mediaControl';
import HeadphonesOffIcon from '_icons/media/headphonesOff.svg';
import HeadphonesOnIcon from '_icons/media/headphonesOn.svg';

const buttonDataByState: MediaControlButtonProxy = {
    off: {
        Icon: HeadphonesOnIcon,
        tooltip: 'Включить звук',
    },
    on: {
        Icon: HeadphonesOffIcon,
        tooltip: 'Выключить звук',
    },
};

export { buttonDataByState };
