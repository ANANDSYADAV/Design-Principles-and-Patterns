// Proxy Pattern
// Definition (Short): The Proxy Pattern provides a surrogate or placeholder for another object to control access to it.
// Use Cases (Short): Useful for lazy initialization, access control, logging, and caching.

class RealImage {
  constructor(filename) {
    this.filename = filename;
    this.loadfile(this.filename);
  }
  loadfile(filename) {
    console.log(`loading ${this.filename}`);
  }
  display() {
    console.log(`Displaying ${this.filename}`);
  }
}

class ProxyImage {
  constructor(filename) {
    this.filename = filename;
    this.realImage = null;
  }
  display() {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

const image = new ProxyImage("image1.jpg");
image.display();
image.display();
