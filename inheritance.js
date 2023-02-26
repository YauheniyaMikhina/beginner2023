// Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal
class Animal {
    constructor (animal1) {
        this.animal1 = animal1;
    }
    move() {
        console.log(`${this.animal1} is moving`);
    }
}
const animal= new Animal(`Lucky`);
console.log(animal);
animal.move();

class Cat extends Animal {}
const cat = new Cat(`Alice`);
cat.move();

/*Animal { animal1: 'Lucky' }
Lucky is moving
Alice is moving*/