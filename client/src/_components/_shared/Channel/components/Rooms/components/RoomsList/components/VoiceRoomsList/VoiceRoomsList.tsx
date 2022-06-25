import React, { FC, ReactElement } from 'react';
import RoomItem from '../../../RoomItem';
import RoomsDroppableContainer from '../../../RoomsDroppableContainer';

const VoiceRoomsList: FC = (): ReactElement => {
	return (
		<RoomsDroppableContainer label='Voice channels'>
			<RoomItem appearance='voice' />
		</RoomsDroppableContainer>
	);
};

export default VoiceRoomsList;
