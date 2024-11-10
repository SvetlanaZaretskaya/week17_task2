class Transport {
    constructor(type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }

    getInfo() {
        return `Транспортное средство: ${this.type}, цена: ${this.price}, бренд: ${this.brand}`;
    }

    getPrice() {
        return this.price
    }
}

class Car extends Transport {
    constructor(type, price, brand, doors) {
        super(type, price, brand)
        this.doors = doors;
    }
    getDoorsCount() {
        return this.doors
    }
}

class Bike extends Transport {
    constructor(type, price, brand, maxSpeed) {
        super(type, price, brand)
        this.maxSpeed = maxSpeed;
    }

    getMaxSpeed() {
        return this.maxSpeed
    }
}

