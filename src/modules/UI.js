import TodoList from "./todoList";
import Todo from "./todo";

export default class UI {
  static loadHomepage() {
    UI.displayTodos("todoListId", TodoList.instances[0].id);
    UI.initButtons();
  }

  static initButtons() {
    UI.initToggleNav();
    UI.initNavButtons();
    UI.initStaticNav();
    UI.initDynamicNav();
    UI.initNavAdd();
    UI.initTodoListModal();
    UI.initTodoModal();
  }

  static initToggleNav() {
    const toggleNav = document.getElementById("header__toggle-nav");
    toggleNav.addEventListener("click", (event) => {
      const nav = document.getElementById("nav");
      nav.classList.toggle("active");
    });
  }

  static initNavButtons() {
    document.addEventListener("click", (event) => {
      if (event.target.matches(".nav__button")) {
        const buttons = document.querySelectorAll(".nav__button");
        buttons.forEach((b) => b.classList.remove("active"));
        event.target.closest(".nav__button").classList.add("active");
      }
    });
  }

  static initStaticNav() {
    const inbox = document.getElementById("nav__static__inbox");
    inbox.addEventListener("click", () => {
      UI.displayTodos("todoListId", TodoList.instances[0].id);
    });
  }

  static initDynamicNav() {
    const dynamicNavContainer = document.getElementById("nav__dynamic");
    dynamicNavContainer.innerHTML = "";

    const todoLists = TodoList.instances.slice(1); // get all todo lists except the first one

    todoLists.forEach((todoList) => {
      const listContainer = document.createElement("button");
      listContainer.classList.add("nav__dynamic__todolist");
      listContainer.classList.add("nav__button");

      const listName = document.createElement("button");
      listName.innerText = todoList.name;
      listName.classList.add("nav__dynamic__todolist__name");
      listContainer.appendChild(listName);
      listName.addEventListener("click", () => {
        UI.displayTodos("todoListId", todoList.id);
      });

      const listDelete = document.createElement("button");
      listDelete.innerHTML = '<i class="fa fa-times"></i>';
      listDelete.classList.add("nav__dynamic__todolist__delete");

      listDelete.addEventListener("click", () => {
        Todo.removeInstances("todoListId", todoList.id.toString());
        TodoList.remove(todoList.id);

        UI.displayTodos("todoListId", TodoList.instances[0].id.toString());
        UI.initNavButtons();
        UI.initDynamicNav();
        UI.makeTodoListNavActive(0);
      });
      listContainer.appendChild(listDelete);

      dynamicNavContainer.appendChild(listContainer);
    });
  }

  static initNavAdd() {
    const addButton = document.getElementById("nav__add");
    addButton.addEventListener("click", (event) => {
      UI.toggleModal("modal__todolist");
    });
  }

  // static displayTodos(todoKey, todoValue) {
  //   const mainContainer = document.getElementById("main");
  //   mainContainer.innerHTML = "";
  //   let innerHTML = "";

  //   for (let i = 0; i < Todo.instances.length; i += 1) {
  //     if (Todo.instances[i][todoKey] === todoValue.toString()) {
  //       const keys = Object.keys(Todo.instances[i]);
  //       for (let j = 0; j < keys.length; j += 1) {
  //         innerHTML += `${keys[j]}: ${Todo.instances[i][keys[j]]}<br>`;
  //       }
  //       innerHTML += `<br>`;
  //     }
  //   }

  //   if (innerHTML === "") {
  //     innerHTML = "No todos";
  //   }

  //   const todoDiv = document.createElement("div");
  //   todoDiv.innerHTML = innerHTML;
  //   todoDiv.setAttribute("id", "todo");
  //   todoDiv.dataset.todoKey = todoKey;
  //   todoDiv.dataset.todoValue = todoValue.toString();
  //   mainContainer.appendChild(todoDiv);

  //   const addTodoButton = document.createElement("button");
  //   const addTodoButtonText = document.createTextNode("Add todo");
  //   const addTodoButtonIcon = document.createElement("i");
  //   addTodoButtonIcon.classList.add("fas", "fa-plus");
  //   addTodoButton.appendChild(addTodoButtonIcon);
  //   addTodoButton.appendChild(addTodoButtonText);
  //   addTodoButton.setAttribute("id", "add-todo-button");

  //   mainContainer.appendChild(addTodoButton);

  //   UI.initTodoAdd();
  // }

  static displayTodos(todoKey, todoValue) {
    const mainContainer = document.getElementById("main");
    mainContainer.innerHTML = "";
    let innerHTML = `<table><tr><th></th><th>Title</th><th>Description</th><th>Due Date</th><th>Priority</th><th></th></tr>`;
    let tableExists = false;

    for (let i = 0; i < Todo.instances.length; i += 1) {
      if (Todo.instances[i][todoKey] === todoValue.toString()) {
        tableExists = true;
        innerHTML += `<tr><td><i class="fa-regular fa-circle"></i></td><td>${Todo.instances[i].title}</td><td>${Todo.instances[i].description}</td><td>${Todo.instances[i].dueDate}</td><td>${Todo.instances[i].priority}</td><td><i class="fas fa-plus"></i></td></tr>`;
      }
    }

    if (!tableExists) {
      innerHTML = "No todos";
    } else {
      innerHTML += `</table>`;
    }

    const todoDiv = document.createElement("div");
    todoDiv.innerHTML = innerHTML;
    todoDiv.setAttribute("id", "todo");
    todoDiv.dataset.todoKey = todoKey;
    todoDiv.dataset.todoValue = todoValue.toString();
    mainContainer.appendChild(todoDiv);

    const addTodoButton = document.createElement("button");
    const addTodoButtonText = document.createTextNode("Add todo");
    const addTodoButtonIcon = document.createElement("i");
    addTodoButtonIcon.classList.add("fas", "fa-plus");
    addTodoButton.appendChild(addTodoButtonIcon);
    addTodoButton.appendChild(addTodoButtonText);
    addTodoButton.setAttribute("id", "add-todo-button");

    mainContainer.appendChild(addTodoButton);

    const todoTable = document.querySelector("table");
    if (todoTable) {
      const todoCircles = todoTable.getElementsByClassName("fa-circle");
      for (let i = 0; i < todoCircles.length; i += 1) {
        todoCircles[i].addEventListener("click", () => {
          console.log(Todo.instances[i]);
        });
      }

      const todoPlus = todoTable.getElementsByClassName("fa-plus");
      for (let i = 0; i < todoPlus.length; i += 1) {
        todoPlus[i].addEventListener("click", () => {
          console.log(Todo.instances[i]);
        });
      }
    }

    UI.initTodoAdd();
  }

  static initTodoAdd() {
    const addTodoButton = document.getElementById("add-todo-button");

    addTodoButton.addEventListener("click", (event) => {
      UI.toggleModal("modal__todo");
    });
  }

  // -------------------------- //

  static initTodoListModal() {
    const addButton = document.getElementById("modal__todolist__add");
    addButton.addEventListener("click", UI.addTodoListFromModal);

    const cancelButton = document.getElementById("modal__todolist__cancel");

    cancelButton.addEventListener("click", (event) => {
      document.getElementById("modal__todolist__input--name").value = "";
      UI.toggleModal("modal__todolist");
    });
  }

  static addTodoListFromModal() {
    const { value } = document.getElementById("modal__todolist__input--name");
    if (value !== "") {
      TodoList.add(value);
      document.getElementById("modal__todolist__input--name").value = "";

      UI.initDynamicNav();
      UI.makeTodoListNavActive(TodoList.instances.length + 1);

      const todoListId = TodoList.instances[TodoList.instances.length - 1].id;

      UI.displayTodos("todoListId", todoListId);
      UI.toggleModal("modal__todolist");
    }
  }

  static makeTodoListNavActive(arrayIndex) {
    document.querySelectorAll(".nav__button").forEach((element) => {
      element.classList.remove("active");
    });

    const navButton = document.querySelectorAll(".nav__button")[arrayIndex];
    navButton.classList.add("active");
  }

  static toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.toggle("active");
  }

  // -------------------------------------

  static initTodoModal() {
    const addButton = document.getElementById("modal__todo__add");
    addButton.addEventListener("click", UI.addTodoFromModal);

    const cancelButton = document.getElementById("modal__todo__cancel");

    cancelButton.addEventListener("click", (event) => {
      document.getElementById("modal__todo__input--title").value = "";
      UI.toggleModal("modal__todo");
    });
  }

  static addTodoFromModal() {
    const todo = document.querySelector("#todo");
    const dataTodoKey = todo.getAttribute("data-todo-key");
    const dataTodoValue = todo.getAttribute("data-todo-value");

    const titleInput = document.getElementById("modal__todo__input--title");
    const title = titleInput.value;
    const descriptionInput = document.getElementById(
      "modal__todo__input--description"
    );
    const description = descriptionInput.value;

    const dueDateInput = document.getElementById("modal__todo__input--duedate");
    const dueDate = dueDateInput.value;

    const priorityInput = document.getElementById(
      "modal__todo__input--priority"
    );
    const priority = priorityInput.value;

    Todo.add(dataTodoValue, title, description, dueDate, priority, false);

    UI.displayTodos(dataTodoKey, dataTodoValue);
    UI.toggleModal("modal__todo");
  }
}
