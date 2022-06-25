import { makeAutoObservable } from 'mobx';

class AuthStore {
	public isAuth: boolean = false;

	constructor() {
		makeAutoObservable(this);
	}
}

export default new AuthStore();
