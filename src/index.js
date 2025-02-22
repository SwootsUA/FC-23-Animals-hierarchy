'use strict';

class Animals {
    /**
     * Creates a new animal instance.
     * @param {number} age - Age of the Animal.
     * @param {string} name - Name of the Animal.
     * @param {number} weight - Weight of the Animal in kg.
     * @param {number} limbAmount - Number of limbs in the Animal.
     */
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
    static maxAge = 80;
    static maxWeight = 160;

    /**
     * Creates a new bird instance.
     * @param {number} age - Age of the Bird.
     * @param {string} name - Name of the Bird.
     * @param {number} weight - Weight of the Bird in kg.
     * @param {number} limbAmount - Number of limbs in the Bird.
     */
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
}

class Fish extends Animals {
    static maxAge = 400;
    static maxWeight = 40000;

    /**
     * Creates a new fish instance.
     * @param {number} age - Age of the Fish.
     * @param {string} name - Name of the Fish.
     * @param {number} weight - Weight of the Fish in kg.
     * @param {number} limbAmount - Number of limbs in the Fish.
     */
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
}

class Dogs extends Predators {
    static maxAge = 30;
    static maxWeight = 160;

    /**
     * Creates a new dog instance.
     * @param {number} age - Age of the Dog.
     * @param {string} name - Name of the Dog.
     * @param {number} weight - Weight of the Dog in kg.
     * @param {number} limbAmount - Number of limbs in the Dog.
     */
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
}

class Dolphin extends Whales {
    static maxAge = 90;
    static maxWeight = 10000;

    /**
     * Creates a new dolphin instance.
     * @param {number} age - Age of the Dolphin.
     * @param {string} name - Name of the Dolphin.
     * @param {number} weight - Weight of the Dolphin in kg.
     * @param {number} limbAmount - Number of limbs in the Dolphin.
     */
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
        console.log(`${this.name} eat fish`);
    }

    static isDolphin(obj) {
        return obj instanceof Dolphin;
    }
}

class Human extends Primates {
    static maxAge = 200;
    static maxWeight = 650;

    /**
     * Creates a new human instance.
     * @param {number} age - Age of the Human.
     * @param {string} name - Name of the Human.
     * @param {number} weight - Weight of the Human in kg.
     * @param {number} limbAmount - Number of limbs in the Human.
     */
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
}

console.groupCollapsed('=== Testing Birds ===');
const bird1 = new Birds(5, 'BirdNormal', 5, 4);
const bird2 = new Birds(100, 'BirdMax', 200, 4);

bird1.move();
bird1.say();
bird1.eat();
console.dir(bird1);
console.dir(bird2);
console.log(`Static: maxAge = ${Birds.maxAge}, maxWeight = ${Birds.maxWeight}`);
console.log('isBird(bird1): ', Birds.isBird(bird1));
console.log('isAnimal(bird1):', Animals.isAnimal(bird1));
console.groupEnd();

console.groupCollapsed('=== Testing Fish ===');
const fish1 = new Fish(2, 'FishNormal', 7, 0);
const fish2 = new Fish(1000, 'FishMax', 909090, 0);

fish1.move();
fish1.say();
fish1.eat();
console.dir(fish1);
console.dir(fish2);
console.log(`Static: maxAge = ${Fish.maxAge}, maxWeight = ${Fish.maxWeight}`);
console.log('isFish(fish1): ', Fish.isFish(fish1));
console.log('isAnimal(fish1):', Animals.isAnimal(fish1));
console.groupEnd();

console.groupCollapsed('=== Testing Dog ===');
const dog1 = new Dogs(3, 'DogNormal', 15, 4);
const dog2 = new Dogs(60, 'DogMax', 250, 4);

dog1.move();
dog1.say();
dog1.eat();
console.dir(dog1);
console.dir(dog2);
console.log(`Static: maxAge = ${Dogs.maxAge}, maxWeight = ${Dogs.maxWeight}`);
console.log('isDog(dog1): ', Dogs.isDog(dog1));
console.log('isAnimal(dog1):', Animals.isAnimal(dog1));
console.groupEnd();

console.groupCollapsed('=== Testing Dolphin ===');
const dolphin1 = new Dolphin(20, 'DolphinNormal', 150, 4);
const dolphin2 = new Dolphin(120, 'DolphinMax', 25000, 4);

dolphin1.move();
dolphin1.say();
dolphin1.eat();
console.dir(dolphin1);
console.dir(dolphin2);
console.log(`Static: maxAge = ${Dolphin.maxAge}, maxWeight = ${Dolphin.maxWeight}`);
console.log('isDolphin(dolphin1):', Dolphin.isDolphin(dolphin1));
console.log('isAnimal(dolphin1):', Animals.isAnimal(dolphin1));
console.groupEnd();

console.groupCollapsed('=== Testing Human ===');
const human1 = new Human(30, 'HumanNormal', 70, 4);
const human2 = new Human(350, 'HumanMax', 80, 4);

human1.move();
human1.say();
human1.eat();
console.dir(human1);
console.dir(human2);
console.log(`Static: maxAge = ${Human.maxAge}, maxWeight = ${Human.maxWeight}`);
console.log('isHuman(human1):', Human.isHuman(human1));
console.log('isAnimal(human1):', Animals.isAnimal(human1));
console.groupEnd();
