import { TradesStore } from './TradesStore';

export class RootStore {
    tradesStore: TradesStore;

    constructor() {
        this.tradesStore = new TradesStore();
    }
}

