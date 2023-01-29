import Todo from "./todo";

export default class TodoList {
  constructor(name) {
    this.id = TodoList.generateUniqueId();
    this.name = name;
  }

  static instances = [];

  static generateUniqueId() {
    const uniqueId = Math.floor(Math.random() * 1000000000);
    return uniqueId;
  }

  static add(name) {
    const todoList = new TodoList(name);
    TodoList.instances.push(todoList);
  }

  static remove(id) {
    TodoList.instances = TodoList.instances.filter(
      (instance) => instance.id !== id
    );
    Todo.instances = Todo.instances.filter((todo) => todo.todoListId !== id);
  }
}
