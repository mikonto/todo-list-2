export default class Project {
  constructor(name) {
    this.name = name;
    this.addToArray();
  }

  addToArray() {
    Project.instances.push(this);
  }

  static instances = [];

  static index = new Project("index");

  static userProj1 = new Project("User project 1");

  static userProj2 = new Project("User project 2");
}
