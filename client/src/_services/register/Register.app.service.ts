import { UserCreateDto } from '@discord-clone/types/src/modules/users';
import { RegisterResponse } from './Register.http.responses';
import RegisterHttpService from './Register.http.service';
import meStore from '_store/@meStore';
export default class RegisterAppService {
	public static async register(
		fields: UserCreateDto
	): Promise<RegisterResponse> {
		const response = await RegisterHttpService.register(fields);

		const { data } = response;

		localStorage.token = data.accessToken;

		meStore.setClient(data);

		return response;
	}
}
