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
    UI.displayTodos("todoListId", 0);
  }

  static initButtons() {
    UI.initMenuButton();
    UI.initNavButtonsAll();
    UI.initDefaultTodoListButtons();
    UI.initTodoListButtons();
    UI.initAddTodoListButton();
    UI.initTodoListModal();
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
      UI.displayTodos("todoListId", 0);
    });
  }

  static initTodoListButtons() {
    const todoListElem = document.getElementById("todo-lists");
    todoListElem.textContent = "";

    for (let i = 1; i < _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances.length; i += 1) {
      const container = document.createElement("div");
      container.classList.add("todo-list-container");

      const button = document.createElement("button");
      button.innerText = `${_todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances[i].name}`;
      button.classList.add("nav-button");
      container.appendChild(button);
      button.addEventListener("click", () => {
        UI.displayTodos("todoListId", _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances[i].id);
      });

      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = '<i class="fa fa-times"></i>';
      deleteButton.classList.add("delete-button");
      container.appendChild(deleteButton);
      deleteButton.addEventListener("click", () => {
        _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].remove(_todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances[i].id);
        console.log("remove");
        UI.initTodoListButtons();
      });
      todoListElem.appendChild(container);
    }
  }

  static initAddTodoListButton() {
    const addTodoButton = document.getElementById("button-add-todo-list");
    addTodoButton.addEventListener("click", (event) => {
      const nav = document.getElementById("modal-todo-list");
      nav.classList.toggle("active");
      console.log("works");
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
    }
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
    const mainElem = document.getElementById("main");
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
      innerHTML = "empty";
    }
    mainElem.innerHTML = innerHTML;
  }
}


/***/ }),

/***/ "./src/modules/example.js":
/*!********************************!*\
  !*** ./src/modules/example.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Example)
/* harmony export */ });
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ "./src/modules/todoList.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");
// Add some example todo-lists and todos



class Example {
  static add() {
    _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].add("User project 1");
    _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].add("User project 2");
    _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].add("User project 3");

    _todo__WEBPACK_IMPORTED_MODULE_1__["default"].add(
      0,
      "Test todo",
      "Description for todo",
      "Due date here",
      "Priority Low, Medium or High",
      false
    );

    _todo__WEBPACK_IMPORTED_MODULE_1__["default"].add(
      1,
      "Test todsao",
      "Descriptiodsadsan for todo",
      "Due date hdsadsaere",
      "Prioritydsadsa Low, Medium or High",
      false
    );

    _todo__WEBPACK_IMPORTED_MODULE_1__["default"].add(
        0,
        "Ullamco.",
        "Ullamco eiusmod incididunt in sunt exercitation enim.",
        "Due date",
        "Low",
        false
      );


      _todo__WEBPACK_IMPORTED_MODULE_1__["default"].add(
        0,
        "More testttt",
        "Pariatur pariatur labore minim duis laboris sint do consectetur cupidatat irure enim cupidatat.",
        "Due date",
        "High",
        false
      );

      _todo__WEBPACK_IMPORTED_MODULE_1__["default"].add(
        2,
        "Tassskkk",
        "Yeah",
        "Due date",
        "High",
        false
      );

      _todo__WEBPACK_IMPORTED_MODULE_1__["default"].add(
        2,
        "Another task",
        "Pariatur pariatur labore minim.",
        "Due date",
        "Medium",
        false
      );

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
      Todo.instances = JSON.parse(localStorage.getItem("todos"))
      console.log("localstorage is NOT empty")
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


let id = 0;

class TodoList {
  constructor(name) {
    this.id = id;
    this.name = name;
    id += 1;
  }

  static instances = [];

  static init() {
    if (localStorage.getItem("todoLists") === null) {
      TodoList.add("Inbox");
    } else if (TodoList.instances.length === 0) {
      TodoList.instances = JSON.parse(localStorage.getItem("todoLists"));
    }
  }

  static add(name) {
    const todoList = new TodoList(name);
    TodoList.instances.push(todoList);
    TodoList.save();
  }

  static remove(id) {
    // filter out the TodoList instance with the matching id
    TodoList.instances = TodoList.instances.filter(instance => instance.id !== id);
    // filter out all Todos that have a todoListId of the removed TodoList's id
    _todo__WEBPACK_IMPORTED_MODULE_0__["default"].instances = _todo__WEBPACK_IMPORTED_MODULE_0__["default"].instances.filter(todo => todo.todoListId !== id);
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
/* harmony import */ var _modules_example__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/example */ "./src/modules/example.js");





document.addEventListener("DOMContentLoaded", _modules_todoList__WEBPACK_IMPORTED_MODULE_1__["default"].init);
document.addEventListener("DOMContentLoaded", _modules_todo__WEBPACK_IMPORTED_MODULE_2__["default"].init);
// document.addEventListener("DOMContentLoaded", Example.add);
document.addEventListener("DOMContentLoaded", _modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"].loadHomepage);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ1I7O0FBRVg7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixJQUFJLGtFQUF5QixFQUFFO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsMkRBQWtCLFNBQVM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDJEQUFrQjtBQUN4RCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFlLENBQUMsMkRBQWtCO0FBQzFDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBLE1BQU0scURBQVk7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUksOERBQXFCLEVBQUU7QUFDL0MsVUFBVSx1REFBYztBQUN4QixpQ0FBaUMsdURBQWM7QUFDL0Msd0JBQXdCLGlCQUFpQjtBQUN6QywwQkFBMEIsUUFBUSxJQUFJLHVEQUFjLGFBQWE7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbElBO0FBQ2tDO0FBQ1I7O0FBRVg7QUFDZjtBQUNBLElBQUkscURBQVk7QUFDaEIsSUFBSSxxREFBWTtBQUNoQixJQUFJLHFEQUFZOztBQUVoQixJQUFJLGlEQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxpREFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksaURBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsTUFBTSxpREFBUTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0saURBQVE7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLGlEQUFRO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkMwQjs7QUFFMUI7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQWMsR0FBRyw4REFBcUI7QUFDMUM7QUFDQSxJQUFJLGtEQUFTO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN2Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNZO0FBQ1I7QUFDTTs7QUFFeEMsOENBQThDLDhEQUFhO0FBQzNELDhDQUE4QywwREFBUztBQUN2RDtBQUNBLDhDQUE4QyxnRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC0yLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LTIvLi9zcmMvbW9kdWxlcy9leGFtcGxlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC0yLy4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtMi8uL3NyYy9tb2R1bGVzL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC0yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC0yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtMi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC0yL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LTIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgc3RhdGljIGxvYWRIb21lcGFnZSgpIHtcbiAgICBVSS5pbml0QnV0dG9ucygpO1xuICAgIFVJLmRpc3BsYXlUb2RvcyhcInRvZG9MaXN0SWRcIiwgMCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdEJ1dHRvbnMoKSB7XG4gICAgVUkuaW5pdE1lbnVCdXR0b24oKTtcbiAgICBVSS5pbml0TmF2QnV0dG9uc0FsbCgpO1xuICAgIFVJLmluaXREZWZhdWx0VG9kb0xpc3RCdXR0b25zKCk7XG4gICAgVUkuaW5pdFRvZG9MaXN0QnV0dG9ucygpO1xuICAgIFVJLmluaXRBZGRUb2RvTGlzdEJ1dHRvbigpO1xuICAgIFVJLmluaXRUb2RvTGlzdE1vZGFsKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdE1lbnVCdXR0b24oKSB7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmYS1iYXJzXCIpWzBdO1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XG4gICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0TmF2QnV0dG9uc0FsbCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCIubmF2LWJ1dHRvblwiKSkge1xuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYnV0dG9uXCIpO1xuICAgICAgICBidXR0b25zLmZvckVhY2goKGIpID0+IGIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGluaXREZWZhdWx0VG9kb0xpc3RCdXR0b25zKCkge1xuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmJveFwiKTtcbiAgICBpbmJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgVUkuZGlzcGxheVRvZG9zKFwidG9kb0xpc3RJZFwiLCAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0VG9kb0xpc3RCdXR0b25zKCkge1xuICAgIGNvbnN0IHRvZG9MaXN0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1saXN0c1wiKTtcbiAgICB0b2RvTGlzdEVsZW0udGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBUb2RvTGlzdC5pbnN0YW5jZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tbGlzdC1jb250YWluZXJcIik7XG5cbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidXR0b24uaW5uZXJUZXh0ID0gYCR7VG9kb0xpc3QuaW5zdGFuY2VzW2ldLm5hbWV9YDtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ1dHRvblwiKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIFVJLmRpc3BsYXlUb2RvcyhcInRvZG9MaXN0SWRcIiwgVG9kb0xpc3QuaW5zdGFuY2VzW2ldLmlkKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPic7XG4gICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idXR0b25cIik7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBUb2RvTGlzdC5yZW1vdmUoVG9kb0xpc3QuaW5zdGFuY2VzW2ldLmlkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW1vdmVcIik7XG4gICAgICAgIFVJLmluaXRUb2RvTGlzdEJ1dHRvbnMoKTtcbiAgICAgIH0pO1xuICAgICAgdG9kb0xpc3RFbGVtLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGluaXRBZGRUb2RvTGlzdEJ1dHRvbigpIHtcbiAgICBjb25zdCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tYWRkLXRvZG8tbGlzdFwiKTtcbiAgICBhZGRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtdG9kby1saXN0XCIpO1xuICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICBjb25zb2xlLmxvZyhcIndvcmtzXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGluaXRUb2RvTGlzdE1vZGFsKCkge1xuICAgIFVJLmluaXRBZGRUb2RvTGlzdE1vZGFsKCk7XG4gICAgVUkuaW5pdENhbmNlbFRvZG9MaXN0TW9kYWwoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0QWRkVG9kb0xpc3RNb2RhbCgpIHtcbiAgICBjb25zdCBhZGRUb2RvTGlzdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtdG9kby1saXN0LWFkZFwiKTtcbiAgICBhZGRUb2RvTGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkuaGFuZGxlQWRkVG9kb0xpc3QpO1xuICB9XG5cbiAgc3RhdGljIGhhbmRsZUFkZFRvZG9MaXN0KCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1saXN0LW5hbWUtaW5wdXRcIik7XG4gICAgaWYgKHZhbHVlICE9PSBcIlwiKSB7XG4gICAgICBUb2RvTGlzdC5hZGQodmFsdWUpO1xuICAgICAgY29uc3QgYWRkVG9kb0xpc3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtdG9kby1saXN0XCIpO1xuICAgICAgYWRkVG9kb0xpc3RNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWxpc3QtbmFtZS1pbnB1dFwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICBVSS5pbml0VG9kb0xpc3RCdXR0b25zKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGluaXRDYW5jZWxUb2RvTGlzdE1vZGFsKCkge1xuICAgIGNvbnN0IGNhbmNlbFRvZG9MaXN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcIm1vZGFsLXRvZG8tbGlzdC1jYW5jZWxcIlxuICAgICk7XG4gICAgY2FuY2VsVG9kb0xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC10b2RvLWxpc3RcIik7XG4gICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1saXN0LW5hbWUtaW5wdXRcIikudmFsdWUgPSBcIlwiO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRpc3BsYXlUb2Rvcyh0b2RvS2V5LCB0b2RvVmFsdWUpIHtcbiAgICBjb25zdCBtYWluRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBsZXQgaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFRvZG8uaW5zdGFuY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoVG9kby5pbnN0YW5jZXNbaV1bdG9kb0tleV0gPT09IHRvZG9WYWx1ZSkge1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoVG9kby5pbnN0YW5jZXNbaV0pO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGtleXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICBpbm5lckhUTUwgKz0gYCR7a2V5c1tqXX06ICR7VG9kby5pbnN0YW5jZXNbaV1ba2V5c1tqXV19PGJyPmA7XG4gICAgICAgIH1cbiAgICAgICAgaW5uZXJIVE1MICs9IGA8YnI+YDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlubmVySFRNTCA9PT0gXCJcIikge1xuICAgICAgaW5uZXJIVE1MID0gXCJlbXB0eVwiO1xuICAgIH1cbiAgICBtYWluRWxlbS5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIH1cbn1cbiIsIi8vIEFkZCBzb21lIGV4YW1wbGUgdG9kby1saXN0cyBhbmQgdG9kb3NcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi90b2RvTGlzdFwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHtcbiAgc3RhdGljIGFkZCgpIHtcbiAgICBUb2RvTGlzdC5hZGQoXCJVc2VyIHByb2plY3QgMVwiKTtcbiAgICBUb2RvTGlzdC5hZGQoXCJVc2VyIHByb2plY3QgMlwiKTtcbiAgICBUb2RvTGlzdC5hZGQoXCJVc2VyIHByb2plY3QgM1wiKTtcblxuICAgIFRvZG8uYWRkKFxuICAgICAgMCxcbiAgICAgIFwiVGVzdCB0b2RvXCIsXG4gICAgICBcIkRlc2NyaXB0aW9uIGZvciB0b2RvXCIsXG4gICAgICBcIkR1ZSBkYXRlIGhlcmVcIixcbiAgICAgIFwiUHJpb3JpdHkgTG93LCBNZWRpdW0gb3IgSGlnaFwiLFxuICAgICAgZmFsc2VcbiAgICApO1xuXG4gICAgVG9kby5hZGQoXG4gICAgICAxLFxuICAgICAgXCJUZXN0IHRvZHNhb1wiLFxuICAgICAgXCJEZXNjcmlwdGlvZHNhZHNhbiBmb3IgdG9kb1wiLFxuICAgICAgXCJEdWUgZGF0ZSBoZHNhZHNhZXJlXCIsXG4gICAgICBcIlByaW9yaXR5ZHNhZHNhIExvdywgTWVkaXVtIG9yIEhpZ2hcIixcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIFRvZG8uYWRkKFxuICAgICAgICAwLFxuICAgICAgICBcIlVsbGFtY28uXCIsXG4gICAgICAgIFwiVWxsYW1jbyBlaXVzbW9kIGluY2lkaWR1bnQgaW4gc3VudCBleGVyY2l0YXRpb24gZW5pbS5cIixcbiAgICAgICAgXCJEdWUgZGF0ZVwiLFxuICAgICAgICBcIkxvd1wiLFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcblxuXG4gICAgICBUb2RvLmFkZChcbiAgICAgICAgMCxcbiAgICAgICAgXCJNb3JlIHRlc3R0dHRcIixcbiAgICAgICAgXCJQYXJpYXR1ciBwYXJpYXR1ciBsYWJvcmUgbWluaW0gZHVpcyBsYWJvcmlzIHNpbnQgZG8gY29uc2VjdGV0dXIgY3VwaWRhdGF0IGlydXJlIGVuaW0gY3VwaWRhdGF0LlwiLFxuICAgICAgICBcIkR1ZSBkYXRlXCIsXG4gICAgICAgIFwiSGlnaFwiLFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcblxuICAgICAgVG9kby5hZGQoXG4gICAgICAgIDIsXG4gICAgICAgIFwiVGFzc3Nra2tcIixcbiAgICAgICAgXCJZZWFoXCIsXG4gICAgICAgIFwiRHVlIGRhdGVcIixcbiAgICAgICAgXCJIaWdoXCIsXG4gICAgICAgIGZhbHNlXG4gICAgICApO1xuXG4gICAgICBUb2RvLmFkZChcbiAgICAgICAgMixcbiAgICAgICAgXCJBbm90aGVyIHRhc2tcIixcbiAgICAgICAgXCJQYXJpYXR1ciBwYXJpYXR1ciBsYWJvcmUgbWluaW0uXCIsXG4gICAgICAgIFwiRHVlIGRhdGVcIixcbiAgICAgICAgXCJNZWRpdW1cIixcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG5cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRvZG9MaXN0SWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGZpbmlzaGVkKSB7XG4gICAgdGhpcy50b2RvTGlzdElkID0gdG9kb0xpc3RJZDtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZmluaXNoZWQgPSBmaW5pc2hlZDtcbiAgfVxuXG4gIHN0YXRpYyBpbnN0YW5jZXMgPSBbXTtcblxuICBzdGF0aWMgaW5pdCgpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSkge1xuICAgICAgVG9kby5pbnN0YW5jZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpXG4gICAgICBjb25zb2xlLmxvZyhcImxvY2Fsc3RvcmFnZSBpcyBOT1QgZW1wdHlcIilcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYWRkKHRvZG9MaXN0SWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGZpbmlzaGVkKSB7XG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKFxuICAgICAgdG9kb0xpc3RJZCxcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkdWVEYXRlLFxuICAgICAgcHJpb3JpdHksXG4gICAgICBmaW5pc2hlZFxuICAgICk7XG4gICAgVG9kby5pbnN0YW5jZXMucHVzaCh0b2RvKTtcbiAgICBUb2RvLnNhdmUoKTtcbiAgfVxuXG4gIHN0YXRpYyBzYXZlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkoVG9kby5pbnN0YW5jZXMpKTtcbiAgfVxufVxuIiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuXG5sZXQgaWQgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICBpZCArPSAxO1xuICB9XG5cbiAgc3RhdGljIGluc3RhbmNlcyA9IFtdO1xuXG4gIHN0YXRpYyBpbml0KCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0c1wiKSA9PT0gbnVsbCkge1xuICAgICAgVG9kb0xpc3QuYWRkKFwiSW5ib3hcIik7XG4gICAgfSBlbHNlIGlmIChUb2RvTGlzdC5pbnN0YW5jZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBUb2RvTGlzdC5pbnN0YW5jZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RzXCIpKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYWRkKG5hbWUpIHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IG5ldyBUb2RvTGlzdChuYW1lKTtcbiAgICBUb2RvTGlzdC5pbnN0YW5jZXMucHVzaCh0b2RvTGlzdCk7XG4gICAgVG9kb0xpc3Quc2F2ZSgpO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZShpZCkge1xuICAgIC8vIGZpbHRlciBvdXQgdGhlIFRvZG9MaXN0IGluc3RhbmNlIHdpdGggdGhlIG1hdGNoaW5nIGlkXG4gICAgVG9kb0xpc3QuaW5zdGFuY2VzID0gVG9kb0xpc3QuaW5zdGFuY2VzLmZpbHRlcihpbnN0YW5jZSA9PiBpbnN0YW5jZS5pZCAhPT0gaWQpO1xuICAgIC8vIGZpbHRlciBvdXQgYWxsIFRvZG9zIHRoYXQgaGF2ZSBhIHRvZG9MaXN0SWQgb2YgdGhlIHJlbW92ZWQgVG9kb0xpc3QncyBpZFxuICAgIFRvZG8uaW5zdGFuY2VzID0gVG9kby5pbnN0YW5jZXMuZmlsdGVyKHRvZG8gPT4gdG9kby50b2RvTGlzdElkICE9PSBpZCk7XG4gICAgVG9kb0xpc3Quc2F2ZSgpO1xuICAgIFRvZG8uc2F2ZSgpO1xuICB9XG5cbiAgc3RhdGljIHNhdmUoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdHNcIiwgSlNPTi5zdHJpbmdpZnkoVG9kb0xpc3QuaW5zdGFuY2VzKSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFVJIGZyb20gXCIuL21vZHVsZXMvVUlcIjtcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi9tb2R1bGVzL3RvZG9MaXN0XCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9tb2R1bGVzL3RvZG9cIjtcbmltcG9ydCBFeGFtcGxlIGZyb20gXCIuL21vZHVsZXMvZXhhbXBsZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBUb2RvTGlzdC5pbml0KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIFRvZG8uaW5pdCk7XG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBFeGFtcGxlLmFkZCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBVSS5sb2FkSG9tZXBhZ2UpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9