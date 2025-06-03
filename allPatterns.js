// Singleton Pattern
class DBConnection {
  constructor(connectionURL) {
    if (DBConnection.instance) {
      return DBConnection.instance;
    }
    this.connectionURL = connectionURL;
    this.isConnected = true;
    DBConnection.instance = this;
  }
}

const connectToDB = new DBConnection("myMongoDBURL");
const connectToDBAgain = new DBConnection("myMongoDBURL");

if (connectToDBAgain === connectToDB) {
  console.log("We already had connection");
}
console.log(connectToDB.connectionURL);
console.log(connectToDB.isConnected);

// Factory Pattern
class Admin {
  constructor(name) {
    this.role = "Admin";
    this.name = name;
  }
}
class Coach {
  constructor(name) {
    this.role = "Coach";
    this.name = name;
  }
}
class Client {
  constructor(name) {
    this.role = "Client";
    this.name = name;
  }
}

class CreateUser {
  constructor(role, name) {
    switch (role) {
      case "Admin":
        return new Admin(name);
        break;
      case "Client":
        return new Client(name);
        break;
      case "Coach":
        return new Coach(name);
        break;
      default:
        throw new Error("Invalid role provided");
    }
  }
}

const clientUser = new CreateUser("Client", "Raj");
const coachUser = new CreateUser("Coach", "Rahul");
const adminUser = new CreateUser("Admin", "Anish");

console.log(clientUser);
console.log(coachUser);
console.log(adminUser);

// Builder/Constructor
class User {
  constructor() {
    this.name = "";
    this.email = "";
    this.password = "";
  }
}

class UserBuilder {
  constructor() {
    this.user = new User();
  }
  editUserName(newName) {
    this.user.name = newName;
    return this;
  }
  editEmail(newEmail) {
    this.user.email = newEmail;
    return this;
  }
  editPassword(newPassword) {
    this.user.password = newPassword;
    return this;
  }
  build() {
    return this.user;
  }
}

const clientUser = new UserBuilder()
  .editUserName("Anand")
  .editEmail("anand@gmail.com")
  .build();
console.log(clientUser);

// Prototype Pattern
const userPrototype = {
  role: "",
  printRole() {
    console.log(`Current role: ${this.role}`);
  },
};

const rajClient = Object.create(userPrototype);
rajClient.role = "Client";
rajClient.printRole();

const johnCoach = Object.create(userPrototype);
johnCoach.role = "Coach";
johnCoach.printRole();

console.log(rajClient.__proto__ === userPrototype);
console.log(johnCoach.__proto__ === userPrototype);

// Proxy Pattern
class UserAvatar {
  constructor(img) {
    this.fileName = img;
    this.uploadImgToServer(this.fileName);
  }
  uploadImgToServer(fileName) {
    // uploading logic
    console.log(`File ${fileName} has been uploaded`);
  }
}

class UserAvatarProxy {
  constructor(img) {
    this.fileName = img;
  }
  submitImg() {
    this.userAvatarReal = new UserAvatar(this.fileName);
  }
}
const inputFileType = new UserAvatarProxy("pic.png");
inputFileType.submitImg();

// Conposite Pattern
class FileSystemEntity {
  display(indent = 0) {}
}

class File extends FileSystemEntity {
  constructor(name) {
    super();
    this.name = name;
  }
  display(indent = 0) {
    console.log(`${" ".repeat(indent)}📄 ${this.name}`);
  }
}

class Folder extends FileSystemEntity {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
  }
  addChild(childName) {
    this.children.push(childName);
  }
  removeChild(childName) {
    this.children = this.children.filter((file) => file !== childName);
  }
  display(indent = 0) {
    console.log(`${" ".repeat(indent)}📁 ${this.name}`);
    this.children.forEach((child) => child.display(indent + 2));
  }
}

const rootFolder = new Folder("C-Drive");
const publicFolder = new Folder("public");
const privateFolder = new Folder("private");
rootFolder.addChild(publicFolder);
rootFolder.addChild(privateFolder);
const mainFile = new File("main.js");
const indexFile = new File("index.html");
const mockFile = new File("mock.json");
const typesFile = new File("types.ts");
publicFolder.addChild(mainFile);
publicFolder.addChild(indexFile);
privateFolder.addChild(mockFile);
privateFolder.addChild(typesFile);

rootFolder.display();

// Chain of Responsibility Pattern
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
      console.log("Authenticated Successfully");
      return super.handle(request);
    } else {
      console.log("Authentication Failed");
    }
  }
}

class LoggingHandler extends Handler {
  handle(request) {
    console.log("Logged in successfully");
    return super.handle(request);
  }
}

class DataHandler extends Handler {
  handle(request) {
    console.log("Data Processed");
    return super.handle(request);
  }
}

const auth = new AuthHandler();
const logger = new LoggingHandler();
const dataHandle = new DataHandler();

auth.setNext(logger).setNext(dataHandle); // chain setting
const request = {
  isAuthenticated: true,
  action: "Save Data",
};
auth.handle(request);

// Module Pattern
const CounterModule = (function () {
  let count = 0; // private

  // public methods
  return {
    increment() {
      count++;
      console.log(count);
    },
    decrement() {
      count--;
      console.log(count);
    },
    getCount() {
      console.log(count);
    },
  };
})();

CounterModule.getCount();
CounterModule.increment();
CounterModule.decrement();

// Observer Pattern
class Notification {
  constructor() {
    this.subscribers = [];
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  unsubscribe(subsciber) {
    this.subscribers = this.subscribers.filter((user) => user !== subsciber);
  }
  notify(msg) {
    this.subscribers.forEach((user) => user.update(msg));
  }
}

class Subsciber {
  constructor(name) {
    this.name = name;
  }
  update(msg) {
    console.log(`${this.name} => ${msg}`);
  }
}

const appNotifySystem = new Notification();
const user1 = new Subsciber("Anand");
const user2 = new Subsciber("Raj");
const user3 = new Subsciber("Ankit");

appNotifySystem.subscribe(user1);
appNotifySystem.subscribe(user2);
appNotifySystem.notify("Hey check this exclusive playlist");
appNotifySystem.unsubscribe(user2);
appNotifySystem.notify("Hey check this exclusive videos");

// PubSub Pattern
class PubSub {
  constructor() {
    this.coaches = {};
  }
  subscribe(coach, user) {
    if (!this.coaches[coach]) {
      this.coaches[coach] = [];
    }
    this.coaches[coach].push(user);
  }
  unsubscribe(coach, user) {
    if (!this.coaches[coach]) return;
    this.coaches[coach] = this.coaches[coach].filter(
      (client) => client !== user
    );
  }
  publish(coach, info) {
    if (!this.coaches[coach]) return;
    this.coaches[coach].forEach((user) => user(info));
  }
}

const pubsub = new PubSub();
const subscriber1 = (data) => console.log(`Subscriber1 => ${data}`);
const subscriber2 = (data) => console.log(`Subscriber2 => ${data}`);

pubsub.subscribe("Alex", subscriber1);
pubsub.subscribe("John", subscriber2);

pubsub.publish("Alex", "Today I am sick");
pubsub.publish("John", "Today I am not available");

pubsub.unsubscribe("Alex", subscriber1);
pubsub.publish("Alex", "Today I am excited for the session");
