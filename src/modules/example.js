// Add some example todo-lists and todos
import TodoList from "./todoList";
import Todo from "./todo";

export default class Example {
  static add() {
    TodoList.add("User project 1");
    TodoList.add("User project 2");
    TodoList.add("User project 3");

    Todo.add(
      0,
      "Test todo",
      "Description for todo",
      "Due date here",
      "Priority Low, Medium or High",
      false
    );

    Todo.add(
      1,
      "Test todsao",
      "Descriptiodsadsan for todo",
      "Due date hdsadsaere",
      "Prioritydsadsa Low, Medium or High",
      false
    );

    Todo.add(
        0,
        "Ullamco.",
        "Ullamco eiusmod incididunt in sunt exercitation enim.",
        "Due date",
        "Low",
        false
      );


      Todo.add(
        0,
        "More testttt",
        "Pariatur pariatur labore minim duis laboris sint do consectetur cupidatat irure enim cupidatat.",
        "Due date",
        "High",
        false
      );

      Todo.add(
        2,
        "Tassskkk",
        "Yeah",
        "Due date",
        "High",
        false
      );

      Todo.add(
        2,
        "Another task",
        "Pariatur pariatur labore minim.",
        "Due date",
        "Medium",
        false
      );

  }
}
