class Animal {
    speak() {
        console.log('Animal Speaks');
    }
}

class Dog extends Animal {}

const pug = new Dog();
pug.speak();