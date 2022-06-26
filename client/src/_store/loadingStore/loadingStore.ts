import { makeAutoObservable } from 'mobx';

class LoadingStore {
    public isLoadingWithScreen: boolean = true;
    public isLoadingWithBar: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    public setIsLoadingWithScreen(value: boolean): void {
        this.isLoadingWithScreen = value;
    }

    public setIsLoadingWithBar(value: boolean): void {
        this.isLoadingWithBar = value;
    }
}

export const loadingStore = new LoadingStore();
