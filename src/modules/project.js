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
}
