import Project from "./project";

export default class Task {
  constructor(project, title, description, dueDate, priority, finished) {
    this.project = project;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.finished = finished;
    this.addToArray();
  }

  addToArray() {
    Task.instances.push(this);
  }

  static instances = [];

  static task1 = new Task(
    Project.index,
    "Gym",
    "Go to the gym now",
    "Due date will be here",
    "High priority",
    false
  );

  static task2 = new Task(
    Project.index,
    "Gym",
    "Go to the gym now",
    "Due date will be here",
    "High priority",
    true
  );

  static task3 = new Task(
    Project.userProj1,
    "Gym project 1",
    "Go to the gym now 3131",
    "Due date will be heredsafsa",
    "High priority",
    false
  );
}
