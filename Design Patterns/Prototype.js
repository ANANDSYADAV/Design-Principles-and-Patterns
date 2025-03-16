// Prototype Pattern
// Definition (Short):
// The Prototype Pattern allows creating new objects by cloning an existing object (the prototype), rather than creating new instances from scratch.

// Use Cases (Short):
// When object creation is costly or complex.
// When you want to create copies of objects with minor modifications.
// Useful in game development for cloning characters or objects.

const carPrototype = {
  drive() {
    console.log(`Drive ${this.model}`);
  },
};

const bmw = Object.create(carPrototype);
bmw.model = "BMW";
bmw.drive();

const tesla = Object.create(carPrototype);
tesla.model = "Tesla";
tesla.drive();
