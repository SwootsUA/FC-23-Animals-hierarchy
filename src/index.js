'use strict';

class Animals {
    constructor(age, name, weight, limbAmount) {
        this.age = age;
        this.name = name;
        this.weight = weight;
        this.limbAmount = limbAmount;
    }

    move() {
        console.log(`${this.name} moves`);
    }

    say() {
        console.log(`${this.name} say somethig`);
    }

    eat() {
        console.log(`${this.name} eat`);
    }

    static isAnimal(obj) {
        return obj instanceof Animals;
    }
}

class Mammals extends Animals {
    static isMammal(obj) {
        return obj instanceof Mammals;
    }
}

class Predators extends Mammals {
    static isPredator(obj) {
        return obj instanceof Predators;
    }
}

class Whales extends Mammals {
    static isWhale(obj) {
        return obj instanceof Whales;
    }
}

class Primates extends Mammals {
    static isPrimate(obj) {
        return obj instanceof Primates;
    }
}

class Birds extends Animals {
    constructor(age, name, weight = 1, limbAmount = 4) {
        age = age > Birds.maxAge ? Birds.maxAge : age;
        weight = weight > Birds.maxWeight ? Birds.maxWeight : weight;
        super(age, name, weight, limbAmount);
    }

    move() {
        console.log(`${this.name} flies`);
    }

    say() {
        console.log(`${this.name} sing`);
    }

    eat() {
        console.log(`${this.name} eat seeds`);
    }

    static isBird(obj) {
        return obj instanceof Birds;
    }

    static get maxAge() {
        return 80;
    }

    static get maxWeight() {
        return 160;
    }
}

class Fish extends Animals {
    constructor(age, name, weight = 10, limbAmount = 0) {
        age = age > Fish.maxAge ? Fish.maxAge : age;
        weight = weight > Fish.maxWeight ? Fish.maxWeight : weight;
        super(age, name, weight, limbAmount);
    }

    move() {
        console.log(`${this.name} swims`);
    }

    say() {
        console.log(`${this.name} silent`);
    }

    eat() {
        console.log(`${this.name} eat fish food`);
    }

    static isFish(obj) {
        return obj instanceof Fish;
    }

    static get maxAge() {
        return 400;
    }

    static get maxWeight() {
        return 40000;
    }
}

class Dogs extends Predators {
    constructor(age, name, weight = 15, limbAmount = 4) {
        age = age > Dogs.maxAge ? Dogs.maxAge : age;
        weight = weight > Dogs.maxWeight ? Dogs.maxWeight : weight;
        super(age, name, weight, limbAmount);
    }

    move() {
        console.log(`${this.name} runs around`);
    }

    say() {
        console.log(`${this.name} bark`);
    }

    eat() {
        console.log(`${this.name} eat dog food`);
    }

    static isDog(obj) {
        return obj instanceof Dogs;
    }

    static get maxAge() {
        return 30;
    }

    static get maxWeight() {
        return 160;
    }
}

class Dolphin extends Whales {
    constructor(age, name, weight = 600, limbAmount = 4) {
        age = age > Dolphin.maxAge ? Dolphin.maxAge : age;
        weight = weight > Dolphin.maxWeight ? Dolphin.maxWeight : weight;
        super(age, name, weight, limbAmount);
    }

    move() {
        console.log(`${this.name} swims gracefully`);
    }

    say() {
        console.log(`${this.name} squeaks`);
    }

    eat() {
        console.log(`${this.name} swims fish`);
    }

    static isDolphin(obj) {
        return obj instanceof Dolphin;
    }

    static get maxAge() {
        return 90;
    }

    static get maxWeight() {
        return 10000;
    }
}

class Human extends Primates {
    constructor(age, name, weight = 60, limbAmount = 4) {
        age = age > Human.maxAge ? Human.maxAge : age;
        weight = weight > Human.maxWeight ? Human.maxWeight : weight;
        super(age, name, weight, limbAmount);
    }

    move() {
        console.log(`${this.name} walks`);
    }

    say() {
        console.log(`${this.name} talks`);
    }

    eat() {
        console.log(`${this.name} eat human food`);
    }

    static isHuman(obj) {
        return obj instanceof Human;
    }

    static get maxAge() {
        return 200;
    }

    static get maxWeight() {
        return 650;
    }
}

const alex = new Human(2000, 'Alex', 70);
console.log(alex.age);
