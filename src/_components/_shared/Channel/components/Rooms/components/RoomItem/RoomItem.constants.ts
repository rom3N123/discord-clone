import { FC } from 'react';
import { RoomAppearance } from '_types/entities/Room';
import TextRoomIcon from '_icons/rooms/textRoomIcon.svg';
import VoiceRoomIcon from '_icons/rooms/voiceRoomIcon.svg';

export const roomItemIconByAppearance: Record<RoomAppearance, FC> = {
    text: TextRoomIcon,
    voice: VoiceRoomIcon,
};
