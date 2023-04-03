// Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal

const obj1 = {
    name: 'animal',
    eats() {
        console.log(`${this.name} eats smth tasty`)
    }
}

const obj2 = {
    name: 'cat',
}

Object.setPrototypeOf(obj2, obj1)

obj2.eats()

// cat eats smth tasty