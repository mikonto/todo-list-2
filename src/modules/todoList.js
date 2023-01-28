import Todo from "./todo";

export default class TodoList {
  constructor(name) {
    this.id = TodoList.generateUniqueId();
    this.name = name;
  }

  static instances = localStorage.getItem("todoLists")
    ? JSON.parse(localStorage.getItem("todoLists"))
    : [];

  static init() {
    if (!localStorage.getItem("todoLists")) {
      TodoList.instances = [];
    }
    if (TodoList.instances.length === 0) {
      TodoList.add("Inbox");
    }
  }

  static generateUniqueId() {
    const uniqueId = Math.floor(Math.random() * 1000000000);
    return uniqueId;
  }

  static add(name) {
    const todoList = new TodoList(name);
    TodoList.instances.push(todoList);
    TodoList.save();
  }

  static remove(id) {
    TodoList.instances = TodoList.instances.filter(
      (instance) => instance.id !== id
    );
    Todo.instances = Todo.instances.filter((todo) => todo.todoListId !== id);
    TodoList.save();
    Todo.save();
  }

  static save() {
    localStorage.setItem("todoLists", JSON.stringify(TodoList.instances));
  }
}
