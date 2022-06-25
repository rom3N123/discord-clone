import StartCallIcon from '_icons/media/call.svg';
import StartVideoIcon from '_icons/media/camera.svg';
import { WithId } from '_/_types/helperTypes';
import { CommonIconButton } from '_/_types/common';

const buttons: WithId<CommonIconButton>[] = [
    {
        id: 'startAudioCall',
        Icon: StartCallIcon,
        tooltip: 'Начать голосовой звонок',
    },
    {
        id: 'startVideoCall',
        Icon: StartVideoIcon,
        tooltip: 'Начать видеозвонок',
    },
];

export { buttons };
