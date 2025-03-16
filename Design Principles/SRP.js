class MsgLogger {
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
        this.logger.log('Hello');
    }
}

const loggerObj = new MsgLogger();
const userObj = new User('Anand', loggerObj);
userObj.greet();