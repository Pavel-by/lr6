export const MarketState = {
    Wait: 'Wait',
    Active: 'Active',
    Finished: 'Finished'
};

export class Market {
    constructor (from?) {
        if (from)
            this.update(from);
    }

    start: Date;
    end: Date;
    recomputeDuration: number;
    state: String;

    update(from) {
        this.start = new Date(from.start);
        this.end = new Date(from.end);
        this.recomputeDuration = from.recomputeDuration;
        this.state = from.state;
    }
}