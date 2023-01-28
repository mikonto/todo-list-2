import Todo from "./todo";

let id = 0;

export default class TodoList {
  constructor(name) {
    this.id = id;
    this.name = name;
    id += 1;
  }

  static instances = [];

  static init() {
    if (localStorage.getItem("todoLists") === null) {
      TodoList.add("Inbox");
    } else if (TodoList.instances.length === 0) {
      TodoList.instances = JSON.parse(localStorage.getItem("todoLists"));
    }
  }

  static add(name) {
    const todoList = new TodoList(name);
    TodoList.instances.push(todoList);
    TodoList.save();
  }

  static remove(id) {
    // filter out the TodoList instance with the matching id
    TodoList.instances = TodoList.instances.filter(instance => instance.id !== id);
    // filter out all Todos that have a todoListId of the removed TodoList's id
    Todo.instances = Todo.instances.filter(todo => todo.todoListId !== id);
    TodoList.save();
    Todo.save();
  }

  static save() {
    localStorage.setItem("todoLists", JSON.stringify(TodoList.instances));
  }
}
