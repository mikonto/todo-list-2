import UI from "./modules/UI";
import TodoList from "./modules/todoList";
import Todo from "./modules/todo";

document.addEventListener(
  "DOMContentLoaded",
  TodoList.checkTodoListLocalStorage()
);
document.addEventListener("DOMContentLoaded", Todo.checkTodoLocalStorage);
document.addEventListener("DOMContentLoaded", UI.loadHomepage);
