import { UserCreateDto } from '@discord-clone/types/src/modules/users';
import api from '_http/api';
import { RegisterResponse } from './Register.http.responses';

export default class RegisterHttpService {
	public static async register(data: UserCreateDto): Promise<RegisterResponse> {
		return api.post('auth/register', data);
	}
}
