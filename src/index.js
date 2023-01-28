import UI from "./modules/UI";
import TodoList from "./modules/todoList";
import Todo from "./modules/todo";

document.addEventListener("DOMContentLoaded", TodoList.init);
document.addEventListener("DOMContentLoaded", Todo.init);
document.addEventListener("DOMContentLoaded", UI.loadHomepage);
