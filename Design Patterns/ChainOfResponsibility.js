// Chain of Responsibility Pattern
// Definition (Short): It allows multiple objects to handle a request sequentially, passing it along a chain of handlers until one handles it.
// Use Cases (Short): Useful for logging, middleware in web frameworks, or handling UI events.

class Handler {
  setNext(handler) {
    this.nextHandler = handler;
    return handler;
  }
  handle(request) {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

class AuthHandler extends Handler {
  handle(request) {
    if (request.isAuthenticated) {
      console.log("Authentication Successfull");
      return super.handle(request);
    } else {
      console.log("Authentication Failed");
    }
  }
}

class LoggingHandler extends Handler {
  handle(request) {
    console.log("Logging being done");
    return super.handle(request);
  }
}

class DataHandler extends Handler {
  handle(request) {
    console.log("Processing Data");
    return super.handle(request);
  }
}

const auth = new AuthHandler();
const logger = new LoggingHandler();
const dataHandler = new DataHandler();

auth.setNext(logger).setNext(dataHandler);

const request = { isAuthenticated: true, action: "Save Data" };
auth.handle(request);
