import React, { FC, ReactElement } from 'react';
import RoomItem from '../../../RoomItem';
import RoomsDroppableContainer from '../../../RoomsDroppableContainer';

const TextRoomsList: FC = (): ReactElement => {
	return (
		<RoomsDroppableContainer label='Text channels'>
			<RoomItem appearance='text' />
		</RoomsDroppableContainer>
	);
};

export default TextRoomsList;
