export class ShareOwner {
    constructor(from?) {
        if (!from)
            return;

        this.update(from);
    }

    _id: String;
    sharesCount: number = 0;

    update(from) {
        this._id = from._id.toString();

        if (from.sharesCount !== undefined)
            this.sharesCount = from.sharesCount;
    }
}

export class Share {
    constructor(from?) {
        if (!from)
            return;

        this.update(from);
    }

    _id: String;
    name: String;
    distribution: String;
    dispersion: number;
    price: number;
    count: number;
    owners: Array<ShareOwner>;

    get availableCount() {
        return this.count - this.owners.reduce((totalCount, owner) => totalCount + owner.sharesCount, 0);
    }

    update(from) {
        this._id = from._id?.toString();
        this.name = from.name;
        this.distribution = from.distribution;
        this.dispersion = from.dispersion;
        this.price = from.price;
        this.count = from.count;
        this.owners = from.owners ? from.owners : [];
    }
}