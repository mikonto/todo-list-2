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
    UI.initButtons();
    UI.displayTodos("todoListId", _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances[0].id);
  }

  static initButtons() {
    UI.initMenuButton();
    UI.initNavButtonsAll();
    UI.initDefaultTodoListButtons();
    UI.initTodoListButtons();
    UI.initAddTodoListButton();
    UI.initTodoListModal();
    UI.initTodoModal();
  }

  static initMenuButton() {
    const menuBtn = document.getElementsByClassName("fa-bars")[0];
    menuBtn.addEventListener("click", (event) => {
      const nav = document.getElementById("nav");
      nav.classList.toggle("active");
    });
  }

  static initNavButtonsAll() {
    document.addEventListener("click", (event) => {
      if (event.target.matches(".nav-button")) {
        const buttons = document.querySelectorAll(".nav-button");
        buttons.forEach((b) => b.classList.remove("active"));
        event.target.classList.add("active");
      }
    });
  }

  static initDefaultTodoListButtons() {
    const inbox = document.getElementById("inbox");
    inbox.addEventListener("click", () => {
      UI.displayTodos("todoListId", _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances[0].id);
    });
  }

  static initTodoListButtons() {
    const todoListElement = document.getElementById("todo-lists");
    todoListElement.textContent = "";
    for (let i = 1; i < _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances.length; i += 1) {
      const navButton = document.createElement("button");
      navButton.classList.add("nav-button");

      const todoListName = document.createElement("button");
      todoListName.innerText = `${_todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances[i].name}`;
      todoListName.classList.add("todo-list-name");
      navButton.appendChild(todoListName);
      todoListName.addEventListener("click", () => {
        UI.displayTodos("todoListId", _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances[i].id);
      });

      const todoListDelete = document.createElement("button");
      todoListDelete.innerHTML = '<i class="fa fa-times"></i>';
      todoListDelete.classList.add("todo-list-delete");
      navButton.appendChild(todoListDelete);
      todoListDelete.addEventListener("click", () => {
        _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].remove(_todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances[i].id);
        UI.initTodoListButtons();
      });
      todoListElement.appendChild(navButton);
    }
  }

  static initAddTodoListButton() {
    const addTodoButton = document.getElementById("button-add-todo-list");
    addTodoButton.addEventListener("click", (event) => {
      const nav = document.getElementById("modal-todo-list");
      nav.classList.toggle("active");
    });
  }

  static initTodoListModal() {
    UI.initAddTodoListModal();
    UI.initCancelTodoListModal();
  }

  static initAddTodoListModal() {
    const addTodoListButton = document.getElementById("modal-todo-list-add");
    addTodoListButton.addEventListener("click", UI.handleAddTodoList);
  }

  static handleAddTodoList() {
    const { value } = document.getElementById("todo-list-name-input");
    if (value !== "") {
      _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].add(value);
      const addTodoListModal = document.getElementById("modal-todo-list");
      addTodoListModal.classList.toggle("active");
      document.getElementById("todo-list-name-input").value = "";
      UI.initTodoListButtons();
      UI.makeLastTodoListActive();
    }
  }

  static makeLastTodoListActive() {
    document.querySelectorAll(".nav-button").forEach((element) => {
      element.classList.remove("active");
    });

    const lastChild = document.querySelector("#todo-lists").lastElementChild;
    lastChild.classList.add("active");
  }

  static initCancelTodoListModal() {
    const cancelTodoListButton = document.getElementById(
      "modal-todo-list-cancel"
    );
    cancelTodoListButton.addEventListener("click", (event) => {
      const nav = document.getElementById("modal-todo-list");
      nav.classList.toggle("active");
      document.getElementById("todo-list-name-input").value = "";
    });
  }

  static displayTodos(todoKey, todoValue) {
    const mainSection = document.getElementById("main");
    mainSection.innerHTML = "";
    let innerHTML = "";
    for (let i = 0; i < _todo__WEBPACK_IMPORTED_MODULE_1__["default"].instances.length; i += 1) {
      if (_todo__WEBPACK_IMPORTED_MODULE_1__["default"].instances[i][todoKey] === todoValue) {
        const keys = Object.keys(_todo__WEBPACK_IMPORTED_MODULE_1__["default"].instances[i]);
        for (let j = 0; j < keys.length; j += 1) {
          innerHTML += `${keys[j]}: ${_todo__WEBPACK_IMPORTED_MODULE_1__["default"].instances[i][keys[j]]}<br>`;
        }
        innerHTML += `<br>`;
      }
    }
    if (innerHTML === "") {
      innerHTML = "No todos";
    }
    const todoDiv = document.createElement("div");
    todoDiv.innerHTML = innerHTML;
    todoDiv.setAttribute("id", "todo");

    todoDiv.dataset.todoKey = todoKey;
    todoDiv.dataset.todoValue = todoValue;

    mainSection.appendChild(todoDiv);

    const addTodoButton = document.createElement("button");
    const addTodoButtonText = document.createTextNode("Add todo");
    const addTodoButtonIcon = document.createElement("i");
    addTodoButtonIcon.classList.add("fas", "fa-plus");
    addTodoButton.appendChild(addTodoButtonIcon);
    addTodoButton.appendChild(addTodoButtonText);
    addTodoButton.setAttribute("id", "add-todo-button");
    mainSection.appendChild(addTodoButton);
    UI.initAddTodoButton();
  }

  static initAddTodoButton() {
    const addTodoButton = document.getElementById("add-todo-button");
    addTodoButton.addEventListener("click", (event) => {
      const nav = document.getElementById("modal-todo");
      nav.classList.toggle("active");
    });
  }

  static initTodoModal() {
    UI.initAddTodoModal();
    UI.initCancelTodoModal();
  }

  static initAddTodoModal() {
    const addTodoButton = document.getElementById("modal-todo-add");
    addTodoButton.addEventListener("click", UI.handleAddTodo);
  }

  static handleAddTodo() {
    const todoElement = document.querySelector("#todo");
    const dataTodoKey = todoElement.getAttribute("data-todo-key");
    const dataTodoValue = todoElement.getAttribute("data-todo-value");
    _todo__WEBPACK_IMPORTED_MODULE_1__["default"].add(
      dataTodoValue,
      "name",
      "title",
      "description",
      "due date",
      "priority",
      false
    );
    const addTodoModal = document.getElementById("modal-todo");
    addTodoModal.classList.toggle("active");
    todoElement.value = "";
    UI.displayTodos(dataTodoKey, dataTodoValue);
  }

  static initCancelTodoModal() {
    const cancelTodoButton = document.getElementById("modal-todo-cancel");

    cancelTodoButton.addEventListener("click", (event) => {
      const nav = document.getElementById("modal-todo");
      nav.classList.toggle("active");
      document.getElementById("todo-name-input").value = "";
    });
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

  static init() {
    if (localStorage.getItem("todos")) {
      const todos = JSON.parse(localStorage.getItem("todos"));
      if (todos.length > 0) {
        Todo.instances = todos;
      }
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

  static instances = localStorage.getItem("todoLists")
    ? JSON.parse(localStorage.getItem("todoLists"))
    : [];

  static init() {
    if (!localStorage.getItem("todoLists")) {
      TodoList.instances = [];
    }
    if (TodoList.instances.length === 0) {
      TodoList.add("Inbox");
    }
  }

  static generateUniqueId() {
    const uniqueId = Math.floor(Math.random() * 1000000000);
    return uniqueId;
  }

  static add(name) {
    const todoList = new TodoList(name);
    TodoList.instances.push(todoList);
    TodoList.save();
  }

  static remove(id) {
    TodoList.instances = TodoList.instances.filter(
      (instance) => instance.id !== id
    );
    _todo__WEBPACK_IMPORTED_MODULE_0__["default"].instances = _todo__WEBPACK_IMPORTED_MODULE_0__["default"].instances.filter((todo) => todo.todoListId !== id);
    TodoList.save();
    _todo__WEBPACK_IMPORTED_MODULE_0__["default"].save();
  }

  static save() {
    localStorage.setItem("todoLists", JSON.stringify(TodoList.instances));
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
/* harmony import */ var _modules_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todo */ "./src/modules/todo.js");




document.addEventListener("DOMContentLoaded", _modules_todoList__WEBPACK_IMPORTED_MODULE_1__["default"].init);
document.addEventListener("DOMContentLoaded", _modules_todo__WEBPACK_IMPORTED_MODULE_2__["default"].init);
document.addEventListener("DOMContentLoaded", _modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"].loadHomepage);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ1k7QUFDUjs7QUFFbEMsOENBQThDLDhEQUFhO0FBQzNELDhDQUE4QywwREFBUztBQUN2RCw4Q0FBOEMsZ0VBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtMi8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC0yLy4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtMi8uL3NyYy9tb2R1bGVzL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC0yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC0yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtMi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC0yL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LTIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgc3RhdGljIGxvYWRIb21lcGFnZSgpIHtcbiAgICBVSS5pbml0QnV0dG9ucygpO1xuICAgIFVJLmRpc3BsYXlUb2RvcyhcInRvZG9MaXN0SWRcIiwgVG9kb0xpc3QuaW5zdGFuY2VzWzBdLmlkKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0QnV0dG9ucygpIHtcbiAgICBVSS5pbml0TWVudUJ1dHRvbigpO1xuICAgIFVJLmluaXROYXZCdXR0b25zQWxsKCk7XG4gICAgVUkuaW5pdERlZmF1bHRUb2RvTGlzdEJ1dHRvbnMoKTtcbiAgICBVSS5pbml0VG9kb0xpc3RCdXR0b25zKCk7XG4gICAgVUkuaW5pdEFkZFRvZG9MaXN0QnV0dG9uKCk7XG4gICAgVUkuaW5pdFRvZG9MaXN0TW9kYWwoKTtcbiAgICBVSS5pbml0VG9kb01vZGFsKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdE1lbnVCdXR0b24oKSB7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmYS1iYXJzXCIpWzBdO1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XG4gICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0TmF2QnV0dG9uc0FsbCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCIubmF2LWJ1dHRvblwiKSkge1xuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYnV0dG9uXCIpO1xuICAgICAgICBidXR0b25zLmZvckVhY2goKGIpID0+IGIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGluaXREZWZhdWx0VG9kb0xpc3RCdXR0b25zKCkge1xuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmJveFwiKTtcbiAgICBpbmJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgVUkuZGlzcGxheVRvZG9zKFwidG9kb0xpc3RJZFwiLCBUb2RvTGlzdC5pbnN0YW5jZXNbMF0uaWQpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGluaXRUb2RvTGlzdEJ1dHRvbnMoKSB7XG4gICAgY29uc3QgdG9kb0xpc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWxpc3RzXCIpO1xuICAgIHRvZG9MaXN0RWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBUb2RvTGlzdC5pbnN0YW5jZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5hdkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBuYXZCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5hdi1idXR0b25cIik7XG5cbiAgICAgIGNvbnN0IHRvZG9MaXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICB0b2RvTGlzdE5hbWUuaW5uZXJUZXh0ID0gYCR7VG9kb0xpc3QuaW5zdGFuY2VzW2ldLm5hbWV9YDtcbiAgICAgIHRvZG9MaXN0TmFtZS5jbGFzc0xpc3QuYWRkKFwidG9kby1saXN0LW5hbWVcIik7XG4gICAgICBuYXZCdXR0b24uYXBwZW5kQ2hpbGQodG9kb0xpc3ROYW1lKTtcbiAgICAgIHRvZG9MaXN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBVSS5kaXNwbGF5VG9kb3MoXCJ0b2RvTGlzdElkXCIsIFRvZG9MaXN0Lmluc3RhbmNlc1tpXS5pZCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdG9kb0xpc3REZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgdG9kb0xpc3REZWxldGUuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+JztcbiAgICAgIHRvZG9MaXN0RGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxpc3QtZGVsZXRlXCIpO1xuICAgICAgbmF2QnV0dG9uLmFwcGVuZENoaWxkKHRvZG9MaXN0RGVsZXRlKTtcbiAgICAgIHRvZG9MaXN0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIFRvZG9MaXN0LnJlbW92ZShUb2RvTGlzdC5pbnN0YW5jZXNbaV0uaWQpO1xuICAgICAgICBVSS5pbml0VG9kb0xpc3RCdXR0b25zKCk7XG4gICAgICB9KTtcbiAgICAgIHRvZG9MaXN0RWxlbWVudC5hcHBlbmRDaGlsZChuYXZCdXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBpbml0QWRkVG9kb0xpc3RCdXR0b24oKSB7XG4gICAgY29uc3QgYWRkVG9kb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWFkZC10b2RvLWxpc3RcIik7XG4gICAgYWRkVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLXRvZG8tbGlzdFwiKTtcbiAgICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGluaXRUb2RvTGlzdE1vZGFsKCkge1xuICAgIFVJLmluaXRBZGRUb2RvTGlzdE1vZGFsKCk7XG4gICAgVUkuaW5pdENhbmNlbFRvZG9MaXN0TW9kYWwoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0QWRkVG9kb0xpc3RNb2RhbCgpIHtcbiAgICBjb25zdCBhZGRUb2RvTGlzdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtdG9kby1saXN0LWFkZFwiKTtcbiAgICBhZGRUb2RvTGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkuaGFuZGxlQWRkVG9kb0xpc3QpO1xuICB9XG5cbiAgc3RhdGljIGhhbmRsZUFkZFRvZG9MaXN0KCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1saXN0LW5hbWUtaW5wdXRcIik7XG4gICAgaWYgKHZhbHVlICE9PSBcIlwiKSB7XG4gICAgICBUb2RvTGlzdC5hZGQodmFsdWUpO1xuICAgICAgY29uc3QgYWRkVG9kb0xpc3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtdG9kby1saXN0XCIpO1xuICAgICAgYWRkVG9kb0xpc3RNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWxpc3QtbmFtZS1pbnB1dFwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICBVSS5pbml0VG9kb0xpc3RCdXR0b25zKCk7XG4gICAgICBVSS5tYWtlTGFzdFRvZG9MaXN0QWN0aXZlKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG1ha2VMYXN0VG9kb0xpc3RBY3RpdmUoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYnV0dG9uXCIpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxhc3RDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1saXN0c1wiKS5sYXN0RWxlbWVudENoaWxkO1xuICAgIGxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgc3RhdGljIGluaXRDYW5jZWxUb2RvTGlzdE1vZGFsKCkge1xuICAgIGNvbnN0IGNhbmNlbFRvZG9MaXN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcIm1vZGFsLXRvZG8tbGlzdC1jYW5jZWxcIlxuICAgICk7XG4gICAgY2FuY2VsVG9kb0xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC10b2RvLWxpc3RcIik7XG4gICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1saXN0LW5hbWUtaW5wdXRcIikudmFsdWUgPSBcIlwiO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRpc3BsYXlUb2Rvcyh0b2RvS2V5LCB0b2RvVmFsdWUpIHtcbiAgICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBtYWluU2VjdGlvbi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGxldCBpbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVG9kby5pbnN0YW5jZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChUb2RvLmluc3RhbmNlc1tpXVt0b2RvS2V5XSA9PT0gdG9kb1ZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhUb2RvLmluc3RhbmNlc1tpXSk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwga2V5cy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIGlubmVySFRNTCArPSBgJHtrZXlzW2pdfTogJHtUb2RvLmluc3RhbmNlc1tpXVtrZXlzW2pdXX08YnI+YDtcbiAgICAgICAgfVxuICAgICAgICBpbm5lckhUTUwgKz0gYDxicj5gO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaW5uZXJIVE1MID09PSBcIlwiKSB7XG4gICAgICBpbm5lckhUTUwgPSBcIk5vIHRvZG9zXCI7XG4gICAgfVxuICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9EaXYuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICAgIHRvZG9EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvXCIpO1xuXG4gICAgdG9kb0Rpdi5kYXRhc2V0LnRvZG9LZXkgPSB0b2RvS2V5O1xuICAgIHRvZG9EaXYuZGF0YXNldC50b2RvVmFsdWUgPSB0b2RvVmFsdWU7XG5cbiAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcblxuICAgIGNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGFkZFRvZG9CdXR0b25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJBZGQgdG9kb1wiKTtcbiAgICBjb25zdCBhZGRUb2RvQnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGFkZFRvZG9CdXR0b25JY29uLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS1wbHVzXCIpO1xuICAgIGFkZFRvZG9CdXR0b24uYXBwZW5kQ2hpbGQoYWRkVG9kb0J1dHRvbkljb24pO1xuICAgIGFkZFRvZG9CdXR0b24uYXBwZW5kQ2hpbGQoYWRkVG9kb0J1dHRvblRleHQpO1xuICAgIGFkZFRvZG9CdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdG9kby1idXR0b25cIik7XG4gICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQoYWRkVG9kb0J1dHRvbik7XG4gICAgVUkuaW5pdEFkZFRvZG9CdXR0b24oKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0QWRkVG9kb0J1dHRvbigpIHtcbiAgICBjb25zdCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG9kby1idXR0b25cIik7XG4gICAgYWRkVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLXRvZG9cIik7XG4gICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0VG9kb01vZGFsKCkge1xuICAgIFVJLmluaXRBZGRUb2RvTW9kYWwoKTtcbiAgICBVSS5pbml0Q2FuY2VsVG9kb01vZGFsKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdEFkZFRvZG9Nb2RhbCgpIHtcbiAgICBjb25zdCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC10b2RvLWFkZFwiKTtcbiAgICBhZGRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS5oYW5kbGVBZGRUb2RvKTtcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVBZGRUb2RvKCkge1xuICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvXCIpO1xuICAgIGNvbnN0IGRhdGFUb2RvS2V5ID0gdG9kb0VsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10b2RvLWtleVwiKTtcbiAgICBjb25zdCBkYXRhVG9kb1ZhbHVlID0gdG9kb0VsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10b2RvLXZhbHVlXCIpO1xuICAgIFRvZG8uYWRkKFxuICAgICAgZGF0YVRvZG9WYWx1ZSxcbiAgICAgIFwibmFtZVwiLFxuICAgICAgXCJ0aXRsZVwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiLFxuICAgICAgXCJkdWUgZGF0ZVwiLFxuICAgICAgXCJwcmlvcml0eVwiLFxuICAgICAgZmFsc2VcbiAgICApO1xuICAgIGNvbnN0IGFkZFRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtdG9kb1wiKTtcbiAgICBhZGRUb2RvTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB0b2RvRWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gICAgVUkuZGlzcGxheVRvZG9zKGRhdGFUb2RvS2V5LCBkYXRhVG9kb1ZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0Q2FuY2VsVG9kb01vZGFsKCkge1xuICAgIGNvbnN0IGNhbmNlbFRvZG9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLXRvZG8tY2FuY2VsXCIpO1xuXG4gICAgY2FuY2VsVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLXRvZG9cIik7XG4gICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1uYW1lLWlucHV0XCIpLnZhbHVlID0gXCJcIjtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRvZG9MaXN0SWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGZpbmlzaGVkKSB7XG4gICAgdGhpcy50b2RvTGlzdElkID0gdG9kb0xpc3RJZDtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZmluaXNoZWQgPSBmaW5pc2hlZDtcbiAgfVxuXG4gIHN0YXRpYyBpbnN0YW5jZXMgPSBbXTtcblxuICBzdGF0aWMgaW5pdCgpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSkge1xuICAgICAgY29uc3QgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpO1xuICAgICAgaWYgKHRvZG9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgVG9kby5pbnN0YW5jZXMgPSB0b2RvcztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYWRkKHRvZG9MaXN0SWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGZpbmlzaGVkKSB7XG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKFxuICAgICAgdG9kb0xpc3RJZCxcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkdWVEYXRlLFxuICAgICAgcHJpb3JpdHksXG4gICAgICBmaW5pc2hlZFxuICAgICk7XG4gICAgVG9kby5pbnN0YW5jZXMucHVzaCh0b2RvKTtcbiAgICBUb2RvLnNhdmUoKTtcbiAgfVxuXG4gIHN0YXRpYyBzYXZlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkoVG9kby5pbnN0YW5jZXMpKTtcbiAgfVxufVxuIiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLmlkID0gVG9kb0xpc3QuZ2VuZXJhdGVVbmlxdWVJZCgpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzdGF0aWMgaW5zdGFuY2VzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdHNcIilcbiAgICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdHNcIikpXG4gICAgOiBbXTtcblxuICBzdGF0aWMgaW5pdCgpIHtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RzXCIpKSB7XG4gICAgICBUb2RvTGlzdC5pbnN0YW5jZXMgPSBbXTtcbiAgICB9XG4gICAgaWYgKFRvZG9MaXN0Lmluc3RhbmNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIFRvZG9MaXN0LmFkZChcIkluYm94XCIpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZW5lcmF0ZVVuaXF1ZUlkKCkge1xuICAgIGNvbnN0IHVuaXF1ZUlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMCk7XG4gICAgcmV0dXJuIHVuaXF1ZUlkO1xuICB9XG5cbiAgc3RhdGljIGFkZChuYW1lKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QobmFtZSk7XG4gICAgVG9kb0xpc3QuaW5zdGFuY2VzLnB1c2godG9kb0xpc3QpO1xuICAgIFRvZG9MaXN0LnNhdmUoKTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmUoaWQpIHtcbiAgICBUb2RvTGlzdC5pbnN0YW5jZXMgPSBUb2RvTGlzdC5pbnN0YW5jZXMuZmlsdGVyKFxuICAgICAgKGluc3RhbmNlKSA9PiBpbnN0YW5jZS5pZCAhPT0gaWRcbiAgICApO1xuICAgIFRvZG8uaW5zdGFuY2VzID0gVG9kby5pbnN0YW5jZXMuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLnRvZG9MaXN0SWQgIT09IGlkKTtcbiAgICBUb2RvTGlzdC5zYXZlKCk7XG4gICAgVG9kby5zYXZlKCk7XG4gIH1cblxuICBzdGF0aWMgc2F2ZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0c1wiLCBKU09OLnN0cmluZ2lmeShUb2RvTGlzdC5pbnN0YW5jZXMpKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVUkgZnJvbSBcIi4vbW9kdWxlcy9VSVwiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL21vZHVsZXMvdG9kb0xpc3RcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL21vZHVsZXMvdG9kb1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBUb2RvTGlzdC5pbml0KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIFRvZG8uaW5pdCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBVSS5sb2FkSG9tZXBhZ2UpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9