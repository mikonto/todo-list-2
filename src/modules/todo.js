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
  }
}
