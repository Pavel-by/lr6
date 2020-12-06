export class Member {
    constructor(from?) {
        if (!from)
            return;

        this.update(from);
    }

    _id: String;
    name: String;
    money: number;

    update(from) {
        this._id = from._id.toString();
        this.name = from.name;
        this.money = from.money;
    }
}