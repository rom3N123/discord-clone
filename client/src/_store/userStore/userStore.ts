import { UserClient } from '@discord-clone/types';
import { makeAutoObservable } from 'mobx';

class UserStore {
    public user: UserClient;

    constructor() {
        makeAutoObservable(this);
    }

    setUser(user: UserClient) {
        this.user = user;
    }
}

export const userStore = new UserStore();
