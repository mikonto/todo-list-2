let id = 0;

export default class TodoList {
  constructor(name) {
    this.id = id;
    this.name = name;
    id += 1;
  }

  static instances = [];

  static init() {
    TodoList.add("Index");
  }

  static add(name) {
    const todoList = new TodoList(name);
    TodoList.instances.push(todoList);
  }
}
