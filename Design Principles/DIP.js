class EmailService {
  send(msg) {
    console.log(msg);
  }
}

class SMSService {
  send(msg) {
    console.log(msg);
  }
}

// Business Logic
class Notification {
  constructor(service) {
    this.service = service;
  }
  sendNotification(msg) {
    this.service.send(msg);
  }
}

// const userService = new EmailService();
const userService = new SMSService();
const notification = new Notification(userService);
notification.sendNotification("Hey check our new products");
