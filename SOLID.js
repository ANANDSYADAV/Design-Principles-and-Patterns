// SOLID Principles

// S => Single Responsibility Principle
class Messenger {
  log(msg) {
    console.log(msg);
  }
}

class User {
  constructor(name, logger) {
    this.name = name;
    this.logger = logger;
  }
  greet() {
    this.logger.log("Hello");
  }
}

const loggerObj = new Messenger();
const user = new User("Anand", loggerObj);
user.greet();

// O => Open/Closed Principle
class Price {
  constructor(price) {
    this.price = price;
  }

  gePrice() {
    return this.price;
  }
}

class DiscountedPrice extends Price {
  constructor(price, discount) {
    super(price);
    this.discount = discount;
  }
  getDiscountedPrice() {
    let discountedCost = this.price - this.discount;
    console.log(discountedCost);
  }
}

const finalPrice = new DiscountedPrice(100, 20);
finalPrice.getDiscountedPrice();

// L => Liskov Substitution Principle
class Bird {
  LayEggs() {
    console.log("Lay Eggs......");
  }
}

class FlyingBird extends Bird {
  fly() {
    console.log("Flying ....");
  }
}

class Sparrow extends FlyingBird {}

const sprwBird = new Sparrow();
sprwBird.LayEggs();
sprwBird.fly();

class Penguin extends Bird {}

const pgnBrid = new Penguin();
pgnBrid.LayEggs();

// I => Interface Segregation Principle
class Scanner {
  scan() {
    console.log("Scanning....");
  }
}

class Printer {
  print() {
    console.log("Printing.....");
  }
}

const printer = new Printer();
const scanner = new Scanner();
printer.print();
scanner.scan();

// TS Example for Interface Segregation Principle
// type user = "Admin" | "Coach"; // union

// const specialUser: user = "Admin";
// console.log(specialUser);

// type allUsers = user | "Client";

// const normalUser: allUsers = "Client";
// console.log(normalUser);

// type nonAdminUserType = Omit<user, "Admin">;
// const nonAdminUser: nonAdminUserType = "Coach";
// console.log(nonAdminUser);

// D => Dependency Inversion Principle
class UPIPayment {
  pay(amount) {
    console.log(`Amount ${amount} paid via API`);
  }
}

class NetPayment {
  pay(amount) {
    console.log(`Amount ${amount} paid via Net`);
  }
}

class Payment {
  constructor(service) {
    this.service = service;
  }
  makePayment(amount) {
    this.service.pay(amount);
  }
}

const UPIPaymentService = new UPIPayment();
const NetPaymentService = new NetPayment();
const userUPIPayment = new Payment(UPIPaymentService);
userUPIPayment.makePayment(1000);
const userNetPayment = new Payment(NetPaymentService);
userNetPayment.makePayment(300);
