// Builder Pattern
// Definition: A design pattern that provides a step-by-step approach to construct complex objects, allowing customization without directly altering the object’s code.
// Use-cases: Building complex objects like HTML elements, database query builders, or complex UI components.

class Car {
  constructor() {
    this.engine = "";
    this.wheel = 0;
    this.color = "";
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }
  setEngine(engine) {
    this.car.engine = engine;
    return this;
  }
  setWheel(wheel) {
    this.car.wheel = wheel;
    return this;
  }
  setColor(color) {
    this.car.color = color;
    return this;
  }
  build() {
    return this.car;
  }
}

const myCar = new CarBuilder().setEngine("V8").setColor("red").build();
console.log(myCar);
