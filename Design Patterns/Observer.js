// Observer Pattern
// Definition (Short): It establishes a one-to-many dependency between objects, so when one object changes state, all its dependents are notified and updated automatically.
// Use Cases (Short): Event handling systems, real-time data feeds, or UI updates in frameworks like React.

class Notification {
  constructor() {
    this.subscribers = [];
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((user) => user !== subscriber);
  }
  notify(msg) {
    this.subscribers.forEach((sub) => sub.update(msg));
  }
}

class Subscriber {
  constructor(name) {
    this.name = name;
  }
  update(msg) {
    console.log(`${this.name} => ${msg}`);
  }
}

const appNotificationSystem = new Notification();
const user1 = new Subscriber("anand");
const user2 = new Subscriber("raj");
const user3 = new Subscriber("ankit");

appNotificationSystem.subscribe(user1);
appNotificationSystem.subscribe(user2);
appNotificationSystem.subscribe(user3);

appNotificationSystem.notify("Please update the app");

appNotificationSystem.unsubscribe(user2);
appNotificationSystem.notify("Some new version available");
