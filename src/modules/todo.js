export default class Todo {
  constructor(todoListId, title, description, dueDate, priority, finished) {
    this.todoListId = todoListId;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;

    if (new Date(dueDate) - new Date() < 604800000) {
      this.dueDateWithinWeek = true;
    } else {
      this.dueDateWithinWeek = false;
    }

    this.priority = priority;
    this.finished = finished;
  }

  static instances = [];

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
    Todo.updateLocalStorage();
  }

  static removeMultipleInstances(key, value) {
    Todo.instances = Todo.instances.filter((todo) => todo[key] !== value);
    Todo.updateLocalStorage();
  }

  static removeSingleInstance(todoInstance) {
    const index = Todo.instances.indexOf(todoInstance);
    Todo.instances.splice(index, 1);
    Todo.updateLocalStorage();
  }

  static changeFinished(todoInstance, finished) {
    const updatedTodo = new Todo(
      todoInstance.todoListId,
      todoInstance.title,
      todoInstance.description,
      todoInstance.dueDate,
      todoInstance.priority,
      finished
    );

    const index = Todo.instances.indexOf(todoInstance);
    Todo.instances[index] = updatedTodo;
    Todo.updateLocalStorage();
  }

  static checkTodoLocalStorage() {
    const localStorageTodos = localStorage.getItem("Todo.instances");
    if (localStorageTodos) {
      Todo.instances = JSON.parse(localStorageTodos);
    }
  }

  static updateLocalStorage() {
    localStorage.setItem("Todo.instances", JSON.stringify(Todo.instances));
  }
}
