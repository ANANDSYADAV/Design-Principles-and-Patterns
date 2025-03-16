// Factory Pattern
// Definition: A creational design pattern that provides an interface for creating objects without specifying their concrete classes.

// Use Cases:
// When the exact type of object to be created is determined at runtime.
// When managing object creation logic in one place to avoid code duplication.


class Car {
  constructor(model) {
    this.model = model;
  }
}

class Bike {
  constructor(model) {
    this.model = model;
  }
}

class VehicleFactory {
  static createVechicle(type, model) {
    switch (type) {
      case "car":
        return new Car(model);
        break;
      case "bike":
        return new Bike(model);
        break;
      default:
        throw new Error("Unknown Vehicle");
    }
  }
}

const myCar = VehicleFactory.createVechicle("car", "tesla");
const myBike = VehicleFactory.createVechicle("bike", "honda");

console.log(myCar);
console.log(myBike);
