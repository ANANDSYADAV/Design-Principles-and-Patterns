// composite pattern
// The Composite Pattern allows treating individual objects and compositions of objects (tree structures) uniformly. 
// It enables hierarchical structures where a group of objects can be treated as a single object.

// Use Cases (Short):
// Representing tree structures like file systems, UI components, and organizational hierarchies.
// When a group of objects and a single object should be treated the same way.

class Employee {
  showDetails() {}
}

class Developer extends Employee {
  constructor(name, role) {
    super();
    this.name = name;
    this.role = role;
  }
  showDetails() {
    console.log(`${this.name} | ${this.role}`);
  }
}

class Team extends Employee {
  constructor() {
    super();
    this.members = [];
  }
  addMember(member) {
    this.members.push(member);
  }
  showDetails() {
    console.log("Team Members: ");
    this.members.forEach((member) => member.showDetails());
  }
}

const dev1 = new Developer("Anand", "Js Dev");
const dev2 = new Developer("Raj", "Java Dev");
const team = new Team();
team.addMember(dev1);
team.addMember(dev2);

team.showDetails();
