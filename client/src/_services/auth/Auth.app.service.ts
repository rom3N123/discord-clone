import loadingStore from '_store/loadingStore';
import { UserCredentials } from '@discord-clone/types';
import {
	AuthLoginByAccessTokenResponse,
	AuthLoginByCredentialsResponse,
} from './Auth.http.responses';
import AuthHttpService from './Auth.http.service';
import meStore from '_store/@meStore';
import authStore from '_store/authStore';
export default class AuthAppService {
	private static saveAuthData(response: AuthLoginByCredentialsResponse): void {
		const { data } = response;

		meStore.setClient(data);
		localStorage.token = data.accessToken;
		localStorage.user = data.user;
	}

	public static async loginByCredentials(
		data: UserCredentials
	): Promise<AuthLoginByCredentialsResponse> {
		const response = await AuthHttpService.loginByCredentials(data);

		this.saveAuthData(response);

		authStore.isAuth = true;

		return response;
	}

	public static async loginByAccessToken(): Promise<
		AuthLoginByAccessTokenResponse | undefined
	> {
		try {
			const response = await AuthHttpService.loginByAccessToken();

			const { data } = response;

			meStore.setClient(data);

			authStore.isAuth = true;

			return response;
		} catch (error) {
			console.error(error);
		} finally {
			loadingStore.setIsLoadingWithScreen(false);
		}
	}
}
