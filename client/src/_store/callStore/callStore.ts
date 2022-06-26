import { UserClient } from '@discord-clone/types';
import { makeAutoObservable } from 'mobx';
import { TypeOrNull } from '_types/helperTypes';

class CallStore {
    public isOnCall: boolean = false;
    public userOnCall: TypeOrNull<UserClient>;

    constructor() {
        makeAutoObservable(this);
    }

    callUser(user: UserClient) {
        this.userOnCall = user;
        this.isOnCall = true;
    }

    endCall() {
        this.userOnCall = null;
        this.isOnCall = false;
    }
}

export default new CallStore();
