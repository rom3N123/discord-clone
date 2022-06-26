import { callStore } from '_store';
import { CommonIconButton } from '_/_types/common';
import {
    CameraIcon,
    ShareScreen,
    DisabledMic,
    LeaveCall,
} from './CallButtons.icons';

const buttons: CommonIconButton[] = [
    {
        Icon: CameraIcon,
        tooltip: 'Включить камеру',
    },
    {
        Icon: ShareScreen,
        tooltip: 'Продемонстрируйте свой экран',
    },
    {
        Icon: DisabledMic,
        tooltip: 'Вкл. микрофон',
    },

    {
        Icon: LeaveCall,
        tooltip: 'Отключиться',
        onClick: () => {
            callStore.endCall();
        },
    },
];

export { buttons };
