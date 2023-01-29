/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ "./src/modules/todoList.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");



class UI {
  static loadHomepage() {
    UI.displayTodos("todoListId", _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances[0].id);
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
      UI.displayTodos("todoListId", _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances[0].id);
    });
  }

  static initDynamicNav() {
    const dynamicNavContainer = document.getElementById("nav__dynamic");
    dynamicNavContainer.innerHTML = "";

    const todoLists = _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances.slice(1); // get all todo lists except the first one

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
        _todo__WEBPACK_IMPORTED_MODULE_1__["default"].removeInstances("todoListId", todoList.id.toString());
        _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].remove(todoList.id);

        UI.displayTodos("todoListId", _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances[0].id.toString());
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

    for (let i = 0; i < _todo__WEBPACK_IMPORTED_MODULE_1__["default"].instances.length; i += 1) {
      if (_todo__WEBPACK_IMPORTED_MODULE_1__["default"].instances[i][todoKey] === todoValue.toString()) {
        tableExists = true;
        innerHTML += `<tr><td><i class="fa-regular fa-circle"></i></td><td>${_todo__WEBPACK_IMPORTED_MODULE_1__["default"].instances[i].title}</td><td>${_todo__WEBPACK_IMPORTED_MODULE_1__["default"].instances[i].description}</td><td>${_todo__WEBPACK_IMPORTED_MODULE_1__["default"].instances[i].dueDate}</td><td>${_todo__WEBPACK_IMPORTED_MODULE_1__["default"].instances[i].priority}</td><td><i class="fas fa-plus"></i></td></tr>`;
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
          console.log(_todo__WEBPACK_IMPORTED_MODULE_1__["default"].instances[i]);
        });
      }

      const todoPlus = todoTable.getElementsByClassName("fa-plus");
      for (let i = 0; i < todoPlus.length; i += 1) {
        todoPlus[i].addEventListener("click", () => {
          console.log(_todo__WEBPACK_IMPORTED_MODULE_1__["default"].instances[i]);
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
      _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].add(value);
      document.getElementById("modal__todolist__input--name").value = "";

      UI.initDynamicNav();
      UI.makeTodoListNavActive(_todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances.length + 1);

      const todoListId = _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances[_todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances.length - 1].id;

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

    _todo__WEBPACK_IMPORTED_MODULE_1__["default"].add(dataTodoValue, title, description, dueDate, priority, false);

    UI.displayTodos(dataTodoKey, dataTodoValue);
    UI.toggleModal("modal__todo");
  }
}


/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
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

  static removeInstances(key, value) {
    Todo.instances = Todo.instances.filter((todo) => todo[key] !== value);
  }
}


/***/ }),

/***/ "./src/modules/todoList.js":
/*!*********************************!*\
  !*** ./src/modules/todoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");


class TodoList {
  constructor(name) {
    this.id = TodoList.generateUniqueId();
    this.name = name;
  }

  static instances = [];

  static generateUniqueId() {
    const uniqueId = Math.floor(Math.random() * 1000000000);
    return uniqueId;
  }

  static add(name) {
    const todoList = new TodoList(name);
    TodoList.instances.push(todoList);
  }

  static remove(id) {
    TodoList.instances = TodoList.instances.filter(
      (instance) => instance.id !== id
    );
    _todo__WEBPACK_IMPORTED_MODULE_0__["default"].instances = _todo__WEBPACK_IMPORTED_MODULE_0__["default"].instances.filter((todo) => todo.todoListId !== id);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");
/* harmony import */ var _modules_todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todoList */ "./src/modules/todoList.js");



document.addEventListener("DOMContentLoaded", _modules_todoList__WEBPACK_IMPORTED_MODULE_1__["default"].add("inbox"));
document.addEventListener("DOMContentLoaded", _modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"].loadHomepage);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ1I7O0FBRVg7QUFDZjtBQUNBLGtDQUFrQyxpRUFBd0I7QUFDMUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUVBQXdCO0FBQzVELEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLGlFQUF3QixLQUFLOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsNkRBQW9CO0FBQzVCLFFBQVEsd0RBQWU7O0FBRXZCLHNDQUFzQywwRUFBaUM7QUFDdkU7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsNkJBQTZCLFFBQVEsSUFBSSwyQkFBMkI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLElBQUksOERBQXFCLEVBQUU7QUFDL0MsVUFBVSx1REFBYztBQUN4QjtBQUNBLDZFQUE2RSx1REFBYyxVQUFVLFdBQVcsdURBQWMsZ0JBQWdCLFdBQVcsdURBQWMsWUFBWSxXQUFXLHVEQUFjLGFBQWE7QUFDek47QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3QkFBd0I7QUFDOUM7QUFDQSxzQkFBc0IsdURBQWM7QUFDcEMsU0FBUztBQUNUOztBQUVBO0FBQ0Esc0JBQXNCLHFCQUFxQjtBQUMzQztBQUNBLHNCQUFzQix1REFBYztBQUNwQyxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0EsTUFBTSxxREFBWTtBQUNsQjs7QUFFQTtBQUNBLCtCQUErQixrRUFBeUI7O0FBRXhELHlCQUF5QiwyREFBa0IsQ0FBQyxrRUFBeUI7O0FBRXJFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxpREFBUTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDblJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0IwQjs7QUFFWDtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBYyxHQUFHLDhEQUFxQjtBQUMxQztBQUNBOzs7Ozs7O1VDMUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ1k7O0FBRTFDLDhDQUE4Qyw2REFBWTtBQUMxRCw4Q0FBOEMsZ0VBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtMi8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC0yLy4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtMi8uL3NyYy9tb2R1bGVzL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC0yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC0yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtMi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC0yL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LTIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgc3RhdGljIGxvYWRIb21lcGFnZSgpIHtcbiAgICBVSS5kaXNwbGF5VG9kb3MoXCJ0b2RvTGlzdElkXCIsIFRvZG9MaXN0Lmluc3RhbmNlc1swXS5pZCk7XG4gICAgVUkuaW5pdEJ1dHRvbnMoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0QnV0dG9ucygpIHtcbiAgICBVSS5pbml0VG9nZ2xlTmF2KCk7XG4gICAgVUkuaW5pdE5hdkJ1dHRvbnMoKTtcbiAgICBVSS5pbml0U3RhdGljTmF2KCk7XG4gICAgVUkuaW5pdER5bmFtaWNOYXYoKTtcbiAgICBVSS5pbml0TmF2QWRkKCk7XG4gICAgVUkuaW5pdFRvZG9MaXN0TW9kYWwoKTtcbiAgICBVSS5pbml0VG9kb01vZGFsKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdFRvZ2dsZU5hdigpIHtcbiAgICBjb25zdCB0b2dnbGVOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlcl9fdG9nZ2xlLW5hdlwiKTtcbiAgICB0b2dnbGVOYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XG4gICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0TmF2QnV0dG9ucygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCIubmF2X19idXR0b25cIikpIHtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X19idXR0b25cIik7XG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYikgPT4gYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubmF2X19idXR0b25cIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0U3RhdGljTmF2KCkge1xuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZfX3N0YXRpY19faW5ib3hcIik7XG4gICAgaW5ib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIFVJLmRpc3BsYXlUb2RvcyhcInRvZG9MaXN0SWRcIiwgVG9kb0xpc3QuaW5zdGFuY2VzWzBdLmlkKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0RHluYW1pY05hdigpIHtcbiAgICBjb25zdCBkeW5hbWljTmF2Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZfX2R5bmFtaWNcIik7XG4gICAgZHluYW1pY05hdkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgY29uc3QgdG9kb0xpc3RzID0gVG9kb0xpc3QuaW5zdGFuY2VzLnNsaWNlKDEpOyAvLyBnZXQgYWxsIHRvZG8gbGlzdHMgZXhjZXB0IHRoZSBmaXJzdCBvbmVcblxuICAgIHRvZG9MaXN0cy5mb3JFYWNoKCh0b2RvTGlzdCkgPT4ge1xuICAgICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYXZfX2R5bmFtaWNfX3RvZG9saXN0XCIpO1xuICAgICAgbGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2X19idXR0b25cIik7XG5cbiAgICAgIGNvbnN0IGxpc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGxpc3ROYW1lLmlubmVyVGV4dCA9IHRvZG9MaXN0Lm5hbWU7XG4gICAgICBsaXN0TmFtZS5jbGFzc0xpc3QuYWRkKFwibmF2X19keW5hbWljX190b2RvbGlzdF9fbmFtZVwiKTtcbiAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdE5hbWUpO1xuICAgICAgbGlzdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgVUkuZGlzcGxheVRvZG9zKFwidG9kb0xpc3RJZFwiLCB0b2RvTGlzdC5pZCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgbGlzdERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBsaXN0RGVsZXRlLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPic7XG4gICAgICBsaXN0RGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJuYXZfX2R5bmFtaWNfX3RvZG9saXN0X19kZWxldGVcIik7XG5cbiAgICAgIGxpc3REZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgVG9kby5yZW1vdmVJbnN0YW5jZXMoXCJ0b2RvTGlzdElkXCIsIHRvZG9MaXN0LmlkLnRvU3RyaW5nKCkpO1xuICAgICAgICBUb2RvTGlzdC5yZW1vdmUodG9kb0xpc3QuaWQpO1xuXG4gICAgICAgIFVJLmRpc3BsYXlUb2RvcyhcInRvZG9MaXN0SWRcIiwgVG9kb0xpc3QuaW5zdGFuY2VzWzBdLmlkLnRvU3RyaW5nKCkpO1xuICAgICAgICBVSS5pbml0TmF2QnV0dG9ucygpO1xuICAgICAgICBVSS5pbml0RHluYW1pY05hdigpO1xuICAgICAgICBVSS5tYWtlVG9kb0xpc3ROYXZBY3RpdmUoMCk7XG4gICAgICB9KTtcbiAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdERlbGV0ZSk7XG5cbiAgICAgIGR5bmFtaWNOYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaW5pdE5hdkFkZCgpIHtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdl9fYWRkXCIpO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBVSS50b2dnbGVNb2RhbChcIm1vZGFsX190b2RvbGlzdFwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHN0YXRpYyBkaXNwbGF5VG9kb3ModG9kb0tleSwgdG9kb1ZhbHVlKSB7XG4gIC8vICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgLy8gICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIC8vICAgbGV0IGlubmVySFRNTCA9IFwiXCI7XG5cbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IFRvZG8uaW5zdGFuY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gIC8vICAgICBpZiAoVG9kby5pbnN0YW5jZXNbaV1bdG9kb0tleV0gPT09IHRvZG9WYWx1ZS50b1N0cmluZygpKSB7XG4gIC8vICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhUb2RvLmluc3RhbmNlc1tpXSk7XG4gIC8vICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwga2V5cy5sZW5ndGg7IGogKz0gMSkge1xuICAvLyAgICAgICAgIGlubmVySFRNTCArPSBgJHtrZXlzW2pdfTogJHtUb2RvLmluc3RhbmNlc1tpXVtrZXlzW2pdXX08YnI+YDtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgICBpbm5lckhUTUwgKz0gYDxicj5gO1xuICAvLyAgICAgfVxuICAvLyAgIH1cblxuICAvLyAgIGlmIChpbm5lckhUTUwgPT09IFwiXCIpIHtcbiAgLy8gICAgIGlubmVySFRNTCA9IFwiTm8gdG9kb3NcIjtcbiAgLy8gICB9XG5cbiAgLy8gICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgLy8gICB0b2RvRGl2LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgLy8gICB0b2RvRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb1wiKTtcbiAgLy8gICB0b2RvRGl2LmRhdGFzZXQudG9kb0tleSA9IHRvZG9LZXk7XG4gIC8vICAgdG9kb0Rpdi5kYXRhc2V0LnRvZG9WYWx1ZSA9IHRvZG9WYWx1ZS50b1N0cmluZygpO1xuICAvLyAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG5cbiAgLy8gICBjb25zdCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgLy8gICBjb25zdCBhZGRUb2RvQnV0dG9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQWRkIHRvZG9cIik7XG4gIC8vICAgY29uc3QgYWRkVG9kb0J1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgLy8gICBhZGRUb2RvQnV0dG9uSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtcGx1c1wiKTtcbiAgLy8gICBhZGRUb2RvQnV0dG9uLmFwcGVuZENoaWxkKGFkZFRvZG9CdXR0b25JY29uKTtcbiAgLy8gICBhZGRUb2RvQnV0dG9uLmFwcGVuZENoaWxkKGFkZFRvZG9CdXR0b25UZXh0KTtcbiAgLy8gICBhZGRUb2RvQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXRvZG8tYnV0dG9uXCIpO1xuXG4gIC8vICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb2RvQnV0dG9uKTtcblxuICAvLyAgIFVJLmluaXRUb2RvQWRkKCk7XG4gIC8vIH1cblxuICBzdGF0aWMgZGlzcGxheVRvZG9zKHRvZG9LZXksIHRvZG9WYWx1ZSkge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGxldCBpbm5lckhUTUwgPSBgPHRhYmxlPjx0cj48dGg+PC90aD48dGg+VGl0bGU8L3RoPjx0aD5EZXNjcmlwdGlvbjwvdGg+PHRoPkR1ZSBEYXRlPC90aD48dGg+UHJpb3JpdHk8L3RoPjx0aD48L3RoPjwvdHI+YDtcbiAgICBsZXQgdGFibGVFeGlzdHMgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVG9kby5pbnN0YW5jZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChUb2RvLmluc3RhbmNlc1tpXVt0b2RvS2V5XSA9PT0gdG9kb1ZhbHVlLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgdGFibGVFeGlzdHMgPSB0cnVlO1xuICAgICAgICBpbm5lckhUTUwgKz0gYDx0cj48dGQ+PGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWNpcmNsZVwiPjwvaT48L3RkPjx0ZD4ke1RvZG8uaW5zdGFuY2VzW2ldLnRpdGxlfTwvdGQ+PHRkPiR7VG9kby5pbnN0YW5jZXNbaV0uZGVzY3JpcHRpb259PC90ZD48dGQ+JHtUb2RvLmluc3RhbmNlc1tpXS5kdWVEYXRlfTwvdGQ+PHRkPiR7VG9kby5pbnN0YW5jZXNbaV0ucHJpb3JpdHl9PC90ZD48dGQ+PGkgY2xhc3M9XCJmYXMgZmEtcGx1c1wiPjwvaT48L3RkPjwvdHI+YDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRhYmxlRXhpc3RzKSB7XG4gICAgICBpbm5lckhUTUwgPSBcIk5vIHRvZG9zXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlubmVySFRNTCArPSBgPC90YWJsZT5gO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9EaXYuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICAgIHRvZG9EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvXCIpO1xuICAgIHRvZG9EaXYuZGF0YXNldC50b2RvS2V5ID0gdG9kb0tleTtcbiAgICB0b2RvRGl2LmRhdGFzZXQudG9kb1ZhbHVlID0gdG9kb1ZhbHVlLnRvU3RyaW5nKCk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcblxuICAgIGNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGFkZFRvZG9CdXR0b25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJBZGQgdG9kb1wiKTtcbiAgICBjb25zdCBhZGRUb2RvQnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGFkZFRvZG9CdXR0b25JY29uLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS1wbHVzXCIpO1xuICAgIGFkZFRvZG9CdXR0b24uYXBwZW5kQ2hpbGQoYWRkVG9kb0J1dHRvbkljb24pO1xuICAgIGFkZFRvZG9CdXR0b24uYXBwZW5kQ2hpbGQoYWRkVG9kb0J1dHRvblRleHQpO1xuICAgIGFkZFRvZG9CdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdG9kby1idXR0b25cIik7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRvZG9CdXR0b24pO1xuXG4gICAgY29uc3QgdG9kb1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRhYmxlXCIpO1xuICAgIGlmICh0b2RvVGFibGUpIHtcbiAgICAgIGNvbnN0IHRvZG9DaXJjbGVzID0gdG9kb1RhYmxlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmYS1jaXJjbGVcIik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9DaXJjbGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHRvZG9DaXJjbGVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coVG9kby5pbnN0YW5jZXNbaV0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdG9kb1BsdXMgPSB0b2RvVGFibGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZhLXBsdXNcIik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9QbHVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHRvZG9QbHVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coVG9kby5pbnN0YW5jZXNbaV0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBVSS5pbml0VG9kb0FkZCgpO1xuICB9XG5cbiAgc3RhdGljIGluaXRUb2RvQWRkKCkge1xuICAgIGNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10b2RvLWJ1dHRvblwiKTtcblxuICAgIGFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgVUkudG9nZ2xlTW9kYWwoXCJtb2RhbF9fdG9kb1wiKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgc3RhdGljIGluaXRUb2RvTGlzdE1vZGFsKCkge1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxfX3RvZG9saXN0X19hZGRcIik7XG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS5hZGRUb2RvTGlzdEZyb21Nb2RhbCk7XG5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsX190b2RvbGlzdF9fY2FuY2VsXCIpO1xuXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxfX3RvZG9saXN0X19pbnB1dC0tbmFtZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICBVSS50b2dnbGVNb2RhbChcIm1vZGFsX190b2RvbGlzdFwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRUb2RvTGlzdEZyb21Nb2RhbCgpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsX190b2RvbGlzdF9faW5wdXQtLW5hbWVcIik7XG4gICAgaWYgKHZhbHVlICE9PSBcIlwiKSB7XG4gICAgICBUb2RvTGlzdC5hZGQodmFsdWUpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbF9fdG9kb2xpc3RfX2lucHV0LS1uYW1lXCIpLnZhbHVlID0gXCJcIjtcblxuICAgICAgVUkuaW5pdER5bmFtaWNOYXYoKTtcbiAgICAgIFVJLm1ha2VUb2RvTGlzdE5hdkFjdGl2ZShUb2RvTGlzdC5pbnN0YW5jZXMubGVuZ3RoICsgMSk7XG5cbiAgICAgIGNvbnN0IHRvZG9MaXN0SWQgPSBUb2RvTGlzdC5pbnN0YW5jZXNbVG9kb0xpc3QuaW5zdGFuY2VzLmxlbmd0aCAtIDFdLmlkO1xuXG4gICAgICBVSS5kaXNwbGF5VG9kb3MoXCJ0b2RvTGlzdElkXCIsIHRvZG9MaXN0SWQpO1xuICAgICAgVUkudG9nZ2xlTW9kYWwoXCJtb2RhbF9fdG9kb2xpc3RcIik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG1ha2VUb2RvTGlzdE5hdkFjdGl2ZShhcnJheUluZGV4KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZfX2J1dHRvblwiKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBuYXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdl9fYnV0dG9uXCIpW2FycmF5SW5kZXhdO1xuICAgIG5hdkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgc3RhdGljIHRvZ2dsZU1vZGFsKG1vZGFsSWQpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZGFsSWQpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgc3RhdGljIGluaXRUb2RvTW9kYWwoKSB7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbF9fdG9kb19fYWRkXCIpO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkuYWRkVG9kb0Zyb21Nb2RhbCk7XG5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsX190b2RvX19jYW5jZWxcIik7XG5cbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbF9fdG9kb19faW5wdXQtLXRpdGxlXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgIFVJLnRvZ2dsZU1vZGFsKFwibW9kYWxfX3RvZG9cIik7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYWRkVG9kb0Zyb21Nb2RhbCgpIHtcbiAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvXCIpO1xuICAgIGNvbnN0IGRhdGFUb2RvS2V5ID0gdG9kby5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG8ta2V5XCIpO1xuICAgIGNvbnN0IGRhdGFUb2RvVmFsdWUgPSB0b2RvLmdldEF0dHJpYnV0ZShcImRhdGEtdG9kby12YWx1ZVwiKTtcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsX190b2RvX19pbnB1dC0tdGl0bGVcIik7XG4gICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwibW9kYWxfX3RvZG9fX2lucHV0LS1kZXNjcmlwdGlvblwiXG4gICAgKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG5cbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsX190b2RvX19pbnB1dC0tZHVlZGF0ZVwiKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlO1xuXG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJtb2RhbF9fdG9kb19faW5wdXQtLXByaW9yaXR5XCJcbiAgICApO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gcHJpb3JpdHlJbnB1dC52YWx1ZTtcblxuICAgIFRvZG8uYWRkKGRhdGFUb2RvVmFsdWUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGZhbHNlKTtcblxuICAgIFVJLmRpc3BsYXlUb2RvcyhkYXRhVG9kb0tleSwgZGF0YVRvZG9WYWx1ZSk7XG4gICAgVUkudG9nZ2xlTW9kYWwoXCJtb2RhbF9fdG9kb1wiKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRvZG9MaXN0SWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGZpbmlzaGVkKSB7XG4gICAgdGhpcy50b2RvTGlzdElkID0gdG9kb0xpc3RJZDtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZmluaXNoZWQgPSBmaW5pc2hlZDtcbiAgfVxuXG4gIHN0YXRpYyBpbnN0YW5jZXMgPSBbXTtcblxuICBzdGF0aWMgYWRkKHRvZG9MaXN0SWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGZpbmlzaGVkKSB7XG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKFxuICAgICAgdG9kb0xpc3RJZCxcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkdWVEYXRlLFxuICAgICAgcHJpb3JpdHksXG4gICAgICBmaW5pc2hlZFxuICAgICk7XG4gICAgVG9kby5pbnN0YW5jZXMucHVzaCh0b2RvKTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVJbnN0YW5jZXMoa2V5LCB2YWx1ZSkge1xuICAgIFRvZG8uaW5zdGFuY2VzID0gVG9kby5pbnN0YW5jZXMuZmlsdGVyKCh0b2RvKSA9PiB0b2RvW2tleV0gIT09IHZhbHVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLmlkID0gVG9kb0xpc3QuZ2VuZXJhdGVVbmlxdWVJZCgpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzdGF0aWMgaW5zdGFuY2VzID0gW107XG5cbiAgc3RhdGljIGdlbmVyYXRlVW5pcXVlSWQoKSB7XG4gICAgY29uc3QgdW5pcXVlSWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwKTtcbiAgICByZXR1cm4gdW5pcXVlSWQ7XG4gIH1cblxuICBzdGF0aWMgYWRkKG5hbWUpIHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IG5ldyBUb2RvTGlzdChuYW1lKTtcbiAgICBUb2RvTGlzdC5pbnN0YW5jZXMucHVzaCh0b2RvTGlzdCk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlKGlkKSB7XG4gICAgVG9kb0xpc3QuaW5zdGFuY2VzID0gVG9kb0xpc3QuaW5zdGFuY2VzLmZpbHRlcihcbiAgICAgIChpbnN0YW5jZSkgPT4gaW5zdGFuY2UuaWQgIT09IGlkXG4gICAgKTtcbiAgICBUb2RvLmluc3RhbmNlcyA9IFRvZG8uaW5zdGFuY2VzLmZpbHRlcigodG9kbykgPT4gdG9kby50b2RvTGlzdElkICE9PSBpZCk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFVJIGZyb20gXCIuL21vZHVsZXMvVUlcIjtcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi9tb2R1bGVzL3RvZG9MaXN0XCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIFRvZG9MaXN0LmFkZChcImluYm94XCIpKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIFVJLmxvYWRIb21lcGFnZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=