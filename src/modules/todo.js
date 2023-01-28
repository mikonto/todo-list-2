export default class Todo {
  constructor(todoListId, title, description, dueDate, priority, finished) {
    this.todoListId = todoListId;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.finished = finished;
  }

  static instances = [];

  static init() {
    if (localStorage.getItem("todos")) {
      Todo.instances = JSON.parse(localStorage.getItem("todos"))
      console.log("localstorage is NOT empty")
    }
  }

  static add(todoListId, title, description, dueDate, priority, finished) {
    const todo = new Todo(
      todoListId,
      title,
      description,
      dueDate,
      priority,
      finished
    );
    Todo.instances.push(todo);
    Todo.save();
  }

  static save() {
    localStorage.setItem("todos", JSON.stringify(Todo.instances));
  }
}
