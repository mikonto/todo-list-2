import UI from "./modules/UI";
import TodoList from "./modules/todoList";
import Todo from "./modules/todo";

document.addEventListener("DOMContentLoaded", TodoList.init);
document.addEventListener("DOMContentLoaded", () => {
  TodoList.add("Test");
});
document.addEventListener("DOMContentLoaded", () => {
  TodoList.add("More test");
});

document.addEventListener("DOMContentLoaded", () => {
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
    2,
    "dsadasTest todsao",
    "Descriptiodsadsan for ftodo",
    "Due date hdsasfafasdsaere",
    "Prioritydsadsa Low, Mefsafdium or High",
    true
  );

});

document.addEventListener("DOMContentLoaded", UI.loadHomepage);
