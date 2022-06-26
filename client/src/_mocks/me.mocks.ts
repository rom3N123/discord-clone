import { getMockUser } from './user.mocks';
import { MeClient } from '@discord-clone/types';

export const MOCK_ME: MeClient = {
    user: getMockUser('1'),
    friends: [],
    friendRequests: [],
    channels: [],
};
