import { format } from "date-fns";
import TodoList from "./todoList";
import Todo from "./todo";

export default class UI {
  static loadHomepage() {
    UI.displayMainBody("todoListId", TodoList.instances[0].id, false);
    UI.initTodoAdd();
    UI.initButtons();
  }

  static initButtons() {
    UI.initToggleNav();
    UI.initNavButtons();
    UI.initStaticNav();
    UI.initDynamicNav();
    UI.initTodoListAdd();
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
      UI.displayMainHeader(TodoList.instances[0].id);
      UI.displayMainBody("todoListId", TodoList.instances[0].id, false);
      UI.initTodoAdd();
    });

    const today = document.getElementById("nav__static__today");
    today.addEventListener("click", () => {
      UI.displayMainHeader("Today");

      const todayDate = format(new Date(), "yyyy-MM-dd").toString();
      UI.displayMainBody("dueDate", todayDate, false);

      const footer = document.getElementById("main__footer");
      footer.innerHTML = "";
    });

    const thisWeek = document.getElementById("nav__static__this-week");
    thisWeek.addEventListener("click", () => {
      UI.displayMainHeader("This week");
      UI.displayMainBody("dueDateWithinWeek", true, false);
      const footer = document.getElementById("main__footer");
      footer.innerHTML = "";
    });

    const completed = document.getElementById("nav__static__completed");
    completed.addEventListener("click", () => {
      UI.displayMainHeader("Completed");
      UI.displayMainBody("finished", true, true);

      const footer = document.getElementById("main__footer");
      footer.innerHTML = "";
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
      listContainer.addEventListener("click", (event) => {
        if (event.target === listContainer || event.target === listName) {
          const buttons = document.querySelectorAll(".nav__button");
          buttons.forEach((b) => b.classList.remove("active"));
          event.target.closest(".nav__button").classList.add("active");
          UI.displayMainHeader(todoList.id);
          UI.displayMainBody("todoListId", todoList.id, false);
          UI.initTodoAdd();
        }
      });

      const listDelete = document.createElement("button");
      listDelete.innerHTML = '<i class="fa fa-times"></i>';
      listDelete.classList.add("nav__dynamic__todolist__delete");

      listDelete.addEventListener("click", () => {
        Todo.removeMultipleInstances("todoListId", todoList.id);

        TodoList.remove(todoList.id);

        UI.displayMainHeader(TodoList.instances[0].id);
        UI.displayMainBody("todoListId", TodoList.instances[0].id, false);

        UI.initNavButtons();
        UI.initDynamicNav();
        UI.makeTodoListNavActive(0);
      });
      listContainer.appendChild(listDelete);

      dynamicNavContainer.appendChild(listContainer);
    });
  }

  static initTodoListAdd() {
    const addButton = document.getElementById("nav__add");
    addButton.addEventListener("click", (event) => {
      UI.toggleModal("modal__todolist");
    });
  }

  static displayMainHeader(todoListId) {
    const h1Element = document.querySelector("#main__header > h1");
    if (
      todoListId === "Today" ||
      todoListId === "This week" ||
      todoListId === "Completed"
    ) {
      h1Element.textContent = todoListId;
    } else {
      const todoList = TodoList.instances.find(
        (instance) => instance.id === todoListId
      );

      if (todoList) {
        h1Element.textContent = todoList.name;
      }
    }
  }

  static displayMainBody(todoKey, todoValue, finished) {
    const mainBody = document.querySelector("#main__body__todos");
    mainBody.innerHTML = "";
    mainBody.dataset.todoKey = todoKey;
    mainBody.dataset.todoValue = todoValue;

    const noTodosElement = document.getElementById("main__body__no-todos");
    const todosHeaderElement = document.getElementById(
      "main__body__todos__header"
    );

    const todos = Todo.instances.filter(
      (instance) =>
        instance[todoKey] === todoValue && instance.finished === finished
    );

    if (todos.length === 0) {
      noTodosElement.classList.add("active");
      todosHeaderElement.classList.remove("active");
    } else {
      noTodosElement.classList.remove("active");
      todosHeaderElement.classList.add("active");

      todos.forEach((todo) => {
        const todoRowDiv = document.createElement("div");
        todoRowDiv.classList.add("main__body__todos__todo-row");

        const checkboxDiv = document.createElement("div");
        checkboxDiv.classList.add("main__body__todos__todo-row__checkbox");

        const checkboxButton = document.createElement("button");
        if (todo.finished === false) {
          checkboxButton.innerHTML = '<i class="fa-regular fa-circle"></i>';
        } else if (todo.finished === true) {
          checkboxButton.innerHTML =
            '<i class="fa-regular fa-circle-check"></i>';
        }

        checkboxButton.addEventListener("click", () => {
          if (todo.finished === true) {
            checkboxButton.innerHTML = '<i class="fa-regular fa-circle"></i>';
          } else if (todo.finished === false) {
            checkboxButton.innerHTML =
              '<i class="fa-regular fa-circle-check"></i>';
          }

          setTimeout(() => {
            if (todo.finished === false) {
              Todo.changeFinished(todo, true);
            } else if (todo.finished === true) {
              Todo.changeFinished(todo, false);
            }

            UI.displayMainBody(todoKey, todoValue, false);
          }, 300);
        });

        checkboxDiv.appendChild(checkboxButton);

        todoRowDiv.appendChild(checkboxDiv);

        const titleDiv = document.createElement("div");
        titleDiv.classList.add("main__body__todos__todo-row__title");
        titleDiv.innerText = todo.title;
        todoRowDiv.appendChild(titleDiv);

        const descDiv = document.createElement("div");
        descDiv.classList.add("main__body__todos__todo-row__description");
        descDiv.innerText = todo.description;
        todoRowDiv.appendChild(descDiv);

        const dueDiv = document.createElement("div");
        dueDiv.classList.add("main__body__todos__todo-row__due-date");
        dueDiv.innerText = format(new Date(todo.dueDate), "dd/MM/yyyy");
        todoRowDiv.appendChild(dueDiv);

        const priorityDiv = document.createElement("div");
        priorityDiv.classList.add("main__body__todos__todo-row__priority");
        priorityDiv.innerText = todo.priority;
        todoRowDiv.appendChild(priorityDiv);

        const deleteDiv = document.createElement("div");
        deleteDiv.classList.add("main__body__todos__todo-row__delete");

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fa fa-times"></i>';

        deleteButton.addEventListener("click", () => {
          Todo.removeSingleInstance(todo);
          UI.displayMainBody(todoKey, todoValue, false);
        });

        deleteDiv.appendChild(deleteButton);
        todoRowDiv.appendChild(deleteDiv);

        mainBody.appendChild(todoRowDiv);
      });
    }
  }

  static initTodoAdd() {
    const footer = document.getElementById("main__footer");
    footer.innerHTML = "";
    const addTodoButton = document.createElement("button");
    addTodoButton.innerHTML = '<i class="fas fa-plus"></i>Add todo';
    addTodoButton.setAttribute("id", "main__footer__add");

    addTodoButton.addEventListener("click", (event) => {
      UI.toggleModal("modal__todo");
    });

    footer.appendChild(addTodoButton);
  }

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
      UI.makeTodoListNavActive(TodoList.instances.length + 2);

      const todoListId = TodoList.instances[TodoList.instances.length - 1].id;
      UI.displayMainHeader(todoListId);
      UI.displayMainBody("todoListId", todoListId, false);
      UI.initTodoAdd();
      UI.toggleModal("modal__todolist");
    } else {
      const addTodoListHeader = document.getElementById(
        "modal__todolist__header"
      );
      const note = document.createElement("div");
      note.setAttribute("id", "modal__todolist__header__note");
      note.innerHTML = "Fill the field";
      addTodoListHeader.appendChild(note);

      setTimeout(() => {
        note.style.display = "none";
      }, 1000);
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

  static initTodoModal() {
    const addButton = document.getElementById("modal__todo__add");
    addButton.addEventListener("click", UI.addTodoFromModal);

    const cancelButton = document.getElementById("modal__todo__cancel");

    cancelButton.addEventListener("click", (event) => {
      document.getElementById("modal__todo__input--title").value = "";
      UI.toggleModal("modal__todo");
    });

    const today = new Date();
    const datePicker = document.getElementById("modal__todo__input--duedate");

    const [date] = today.toISOString().split("T");
    datePicker.min = date;
  }

  static addTodoFromModal() {
    const todo = document.querySelector("#main__body__todos");
    const dataTodoKey = todo.getAttribute("data-todo-key");
    const dataTodoKeyString = todo.getAttribute("data-todo-value");
    const dataTodoValue = Number(dataTodoKeyString);

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

    if (title !== "" && description !== "" && dueDate !== "") {
      Todo.add(dataTodoValue, title, description, dueDate, priority, false);

      UI.displayMainBody(dataTodoKey, dataTodoValue, false);
      UI.toggleModal("modal__todo");
    } else {
      const addTodoHeader = document.getElementById("modal__todo__header");
      const note = document.createElement("div");
      note.setAttribute("id", "modal__todo__header__note");
      note.innerHTML = "Fill all fields";
      addTodoHeader.appendChild(note);

      setTimeout(() => {
        note.style.display = "none";
      }, 1000);
    }
  }
}
