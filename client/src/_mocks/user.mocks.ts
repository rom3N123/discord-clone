import { UserClient } from '@discord-clone/types';

export const MOCK_USER: UserClient = {
	_id: '1',
	bio: 'Its me!',
	name: 'Nickname!',
	friends: [],
};

export const getMockUser = (_id: string): UserClient => ({
	...MOCK_USER,
	_id,
});

export const GET_MOCK_USERS = (length: number) =>
	Array.from({ length }, () => MOCK_USER);
