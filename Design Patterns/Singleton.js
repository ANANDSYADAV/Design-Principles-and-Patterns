// Singleton Pattern
// Definition: Ensures that a class has only one instance and provides a global access point to it.
// Use-cases: Database connections, logging systems, and configuration management where multiple instances would cause issues.

class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }

  printMsg() {
    console.log("Inside Singleton");
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

if (instance1 === instance2) console.log("Same");
else console.log("Different");
