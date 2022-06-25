import { getMockUser } from './user.mocks';
import { UserFriendRequestClient } from '@discord-clone/types';

export const MOCK_FRIEND_REQUEST: UserFriendRequestClient = {
	_id: '1',
	requestBy: getMockUser('1'),
	requestTo: getMockUser('2'),
};
