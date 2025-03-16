// Publisher-Subscriber (Pub-Sub) Pattern:
// The Pub-Sub Pattern allows different components to communicate asynchronously by publishing messages to a central channel. Subscribers can listen for specific events and respond accordingly.

class PubSub {
  constructor() {
    this.topics = {};
  }
  subscribe(topic, listener) {
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }
    this.topics[topic].push(listener);
  }
  unsubscribe(topic, listener) {
    if (!this.topics[topic]) return;
    this.topics[topic] = this.topics[topic].filter((user) => user !== listener);
  }
  publish(topic, data) {
    if (!this.topics[topic]) return;
    this.topics[topic].forEach((listener) => listener(data));
  }
}

const pubsub = new PubSub();
const subscriber1 = (data) => console.log(data);
const subscriber2 = (data) => console.log(data);

pubsub.subscribe("news", subscriber1);
pubsub.subscribe("news", subscriber2);

pubsub.publish("news", "Alien Found");

pubsub.unsubscribe("news", subscriber2);

pubsub.publish("news", "Stocks Rises");
