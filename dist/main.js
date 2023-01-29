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
    const menuBtn = document.getElementById("header__toggle-nav");
    menuBtn.addEventListener("click", (event) => {
      const nav = document.getElementById("nav");
      nav.classList.toggle("active");
    });
  }

  static initNavButtonsAll() {
    document.addEventListener("click", (event) => {
      if (event.target.matches(".nav__button")) {
        const buttons = document.querySelectorAll(".nav__button");
        buttons.forEach((b) => b.classList.remove("active"));
        event.target.classList.add("active");
      }
    });
  }

  static initDefaultTodoListButtons() {
    const inbox = document.getElementById("nav__static__inbox");
    inbox.addEventListener("click", () => {
      UI.displayTodos("todoListId", _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances[0].id);
    });
  }

  static initTodoListButtons() {
    const todoListElement = document.getElementById("nav__dynamic");
    todoListElement.textContent = "";
    for (let i = 1; i < _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances.length; i += 1) {
      const navButton = document.createElement("button");
      navButton.classList.add("nav__button");

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
    const addTodoButton = document.getElementById("nav__add");
    addTodoButton.addEventListener("click", (event) => {
      const nav = document.getElementById("modal__todolist");
      nav.classList.toggle("active");
    });
  }

  static initTodoListModal() {
    UI.initAddTodoListModal();
    UI.initCancelTodoListModal();
  }

  static initAddTodoListModal() {
    const addTodoListButton = document.getElementById("modal__todolist__add");
    addTodoListButton.addEventListener("click", UI.handleAddTodoList);
  }

  static handleAddTodoList() {
    const { value } = document.getElementById("modal__todolist__input--name");
    if (value !== "") {
      _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].add(value);
      const addTodoListModal = document.getElementById("modal__todolist");
      addTodoListModal.classList.toggle("active");
      document.getElementById("modal__todolist__input--name").value = "";
      UI.initTodoListButtons();
      UI.makeLastTodoListActive();
    }
  }

  static makeLastTodoListActive() {
    document.querySelectorAll(".nav__button").forEach((element) => {
      element.classList.remove("active");
    });

    const lastChild = document.querySelector("#nav__dynamic").lastElementChild;
    lastChild.classList.add("active");
  }

  static initCancelTodoListModal() {
    const cancelTodoListButton = document.getElementById(
      "modal__todolist__cancel"
    );
    cancelTodoListButton.addEventListener("click", (event) => {
      const nav = document.getElementById("modal__todolist");
      nav.classList.toggle("active");
      document.getElementById("modal__todolist__input--name").value = "";
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
      const nav = document.getElementById("modal__todo");
      nav.classList.toggle("active");
    });
  }

  static initTodoModal() {
    UI.initAddTodoModal();
    UI.initCancelTodoModal();
  }

  static initAddTodoModal() {
    const addTodoButton = document.getElementById("modal__todo__add");
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
    const addTodoModal = document.getElementById("modal__todo");
    addTodoModal.classList.toggle("active");
    todoElement.value = "";
    UI.displayTodos(dataTodoKey, dataTodoValue);
  }

  static initCancelTodoModal() {
    const cancelTodoButton = document.getElementById("modal__todo__cancel");

    cancelTodoButton.addEventListener("click", (event) => {
      const nav = document.getElementById("modal__todo");
      nav.classList.toggle("active");
      document.getElementById("modal__todo__input--name").value = "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ1k7O0FBRTFDLDhDQUE4Qyw2REFBWTtBQUMxRCw4Q0FBOEMsZ0VBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtMi8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC0yLy4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtMi8uL3NyYy9tb2R1bGVzL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC0yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC0yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtMi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC0yL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LTIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgc3RhdGljIGxvYWRIb21lcGFnZSgpIHtcbiAgICBVSS5pbml0QnV0dG9ucygpO1xuICAgIFVJLmRpc3BsYXlUb2RvcyhcInRvZG9MaXN0SWRcIiwgVG9kb0xpc3QuaW5zdGFuY2VzWzBdLmlkKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0QnV0dG9ucygpIHtcbiAgICBVSS5pbml0TWVudUJ1dHRvbigpO1xuICAgIFVJLmluaXROYXZCdXR0b25zQWxsKCk7XG4gICAgVUkuaW5pdERlZmF1bHRUb2RvTGlzdEJ1dHRvbnMoKTtcbiAgICBVSS5pbml0VG9kb0xpc3RCdXR0b25zKCk7XG4gICAgVUkuaW5pdEFkZFRvZG9MaXN0QnV0dG9uKCk7XG4gICAgVUkuaW5pdFRvZG9MaXN0TW9kYWwoKTtcbiAgICBVSS5pbml0VG9kb01vZGFsKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdE1lbnVCdXR0b24oKSB7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyX190b2dnbGUtbmF2XCIpO1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XG4gICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0TmF2QnV0dG9uc0FsbCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCIubmF2X19idXR0b25cIikpIHtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X19idXR0b25cIik7XG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYikgPT4gYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaW5pdERlZmF1bHRUb2RvTGlzdEJ1dHRvbnMoKSB7XG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdl9fc3RhdGljX19pbmJveFwiKTtcbiAgICBpbmJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgVUkuZGlzcGxheVRvZG9zKFwidG9kb0xpc3RJZFwiLCBUb2RvTGlzdC5pbnN0YW5jZXNbMF0uaWQpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGluaXRUb2RvTGlzdEJ1dHRvbnMoKSB7XG4gICAgY29uc3QgdG9kb0xpc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZfX2R5bmFtaWNcIik7XG4gICAgdG9kb0xpc3RFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IFRvZG9MaXN0Lmluc3RhbmNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbmF2QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIG5hdkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2X19idXR0b25cIik7XG5cbiAgICAgIGNvbnN0IHRvZG9MaXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICB0b2RvTGlzdE5hbWUuaW5uZXJUZXh0ID0gYCR7VG9kb0xpc3QuaW5zdGFuY2VzW2ldLm5hbWV9YDtcbiAgICAgIHRvZG9MaXN0TmFtZS5jbGFzc0xpc3QuYWRkKFwidG9kby1saXN0LW5hbWVcIik7XG4gICAgICBuYXZCdXR0b24uYXBwZW5kQ2hpbGQodG9kb0xpc3ROYW1lKTtcbiAgICAgIHRvZG9MaXN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBVSS5kaXNwbGF5VG9kb3MoXCJ0b2RvTGlzdElkXCIsIFRvZG9MaXN0Lmluc3RhbmNlc1tpXS5pZCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdG9kb0xpc3REZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgdG9kb0xpc3REZWxldGUuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+JztcbiAgICAgIHRvZG9MaXN0RGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxpc3QtZGVsZXRlXCIpO1xuICAgICAgbmF2QnV0dG9uLmFwcGVuZENoaWxkKHRvZG9MaXN0RGVsZXRlKTtcbiAgICAgIHRvZG9MaXN0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIFRvZG9MaXN0LnJlbW92ZShUb2RvTGlzdC5pbnN0YW5jZXNbaV0uaWQpO1xuICAgICAgICBVSS5pbml0VG9kb0xpc3RCdXR0b25zKCk7XG4gICAgICB9KTtcbiAgICAgIHRvZG9MaXN0RWxlbWVudC5hcHBlbmRDaGlsZChuYXZCdXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBpbml0QWRkVG9kb0xpc3RCdXR0b24oKSB7XG4gICAgY29uc3QgYWRkVG9kb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2X19hZGRcIik7XG4gICAgYWRkVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsX190b2RvbGlzdFwiKTtcbiAgICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGluaXRUb2RvTGlzdE1vZGFsKCkge1xuICAgIFVJLmluaXRBZGRUb2RvTGlzdE1vZGFsKCk7XG4gICAgVUkuaW5pdENhbmNlbFRvZG9MaXN0TW9kYWwoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0QWRkVG9kb0xpc3RNb2RhbCgpIHtcbiAgICBjb25zdCBhZGRUb2RvTGlzdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxfX3RvZG9saXN0X19hZGRcIik7XG4gICAgYWRkVG9kb0xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLmhhbmRsZUFkZFRvZG9MaXN0KTtcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVBZGRUb2RvTGlzdCgpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsX190b2RvbGlzdF9faW5wdXQtLW5hbWVcIik7XG4gICAgaWYgKHZhbHVlICE9PSBcIlwiKSB7XG4gICAgICBUb2RvTGlzdC5hZGQodmFsdWUpO1xuICAgICAgY29uc3QgYWRkVG9kb0xpc3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxfX3RvZG9saXN0XCIpO1xuICAgICAgYWRkVG9kb0xpc3RNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbF9fdG9kb2xpc3RfX2lucHV0LS1uYW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgIFVJLmluaXRUb2RvTGlzdEJ1dHRvbnMoKTtcbiAgICAgIFVJLm1ha2VMYXN0VG9kb0xpc3RBY3RpdmUoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbWFrZUxhc3RUb2RvTGlzdEFjdGl2ZSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdl9fYnV0dG9uXCIpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxhc3RDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2X19keW5hbWljXCIpLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgbGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH1cblxuICBzdGF0aWMgaW5pdENhbmNlbFRvZG9MaXN0TW9kYWwoKSB7XG4gICAgY29uc3QgY2FuY2VsVG9kb0xpc3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwibW9kYWxfX3RvZG9saXN0X19jYW5jZWxcIlxuICAgICk7XG4gICAgY2FuY2VsVG9kb0xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbF9fdG9kb2xpc3RcIik7XG4gICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxfX3RvZG9saXN0X19pbnB1dC0tbmFtZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGlzcGxheVRvZG9zKHRvZG9LZXksIHRvZG9WYWx1ZSkge1xuICAgIGNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIG1haW5TZWN0aW9uLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbGV0IGlubmVySFRNTCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBUb2RvLmluc3RhbmNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKFRvZG8uaW5zdGFuY2VzW2ldW3RvZG9LZXldID09PSB0b2RvVmFsdWUpIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKFRvZG8uaW5zdGFuY2VzW2ldKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBrZXlzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgaW5uZXJIVE1MICs9IGAke2tleXNbal19OiAke1RvZG8uaW5zdGFuY2VzW2ldW2tleXNbal1dfTxicj5gO1xuICAgICAgICB9XG4gICAgICAgIGlubmVySFRNTCArPSBgPGJyPmA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpbm5lckhUTUwgPT09IFwiXCIpIHtcbiAgICAgIGlubmVySFRNTCA9IFwiTm8gdG9kb3NcIjtcbiAgICB9XG4gICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb0Rpdi5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgdG9kb0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9cIik7XG5cbiAgICB0b2RvRGl2LmRhdGFzZXQudG9kb0tleSA9IHRvZG9LZXk7XG4gICAgdG9kb0Rpdi5kYXRhc2V0LnRvZG9WYWx1ZSA9IHRvZG9WYWx1ZTtcblxuICAgIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKHRvZG9EaXYpO1xuXG4gICAgY29uc3QgYWRkVG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgYWRkVG9kb0J1dHRvblRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkFkZCB0b2RvXCIpO1xuICAgIGNvbnN0IGFkZFRvZG9CdXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgYWRkVG9kb0J1dHRvbkljb24uY2xhc3NMaXN0LmFkZChcImZhc1wiLCBcImZhLXBsdXNcIik7XG4gICAgYWRkVG9kb0J1dHRvbi5hcHBlbmRDaGlsZChhZGRUb2RvQnV0dG9uSWNvbik7XG4gICAgYWRkVG9kb0J1dHRvbi5hcHBlbmRDaGlsZChhZGRUb2RvQnV0dG9uVGV4dCk7XG4gICAgYWRkVG9kb0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10b2RvLWJ1dHRvblwiKTtcbiAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChhZGRUb2RvQnV0dG9uKTtcbiAgICBVSS5pbml0QWRkVG9kb0J1dHRvbigpO1xuICB9XG5cbiAgc3RhdGljIGluaXRBZGRUb2RvQnV0dG9uKCkge1xuICAgIGNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10b2RvLWJ1dHRvblwiKTtcbiAgICBhZGRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxfX3RvZG9cIik7XG4gICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0VG9kb01vZGFsKCkge1xuICAgIFVJLmluaXRBZGRUb2RvTW9kYWwoKTtcbiAgICBVSS5pbml0Q2FuY2VsVG9kb01vZGFsKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdEFkZFRvZG9Nb2RhbCgpIHtcbiAgICBjb25zdCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbF9fdG9kb19fYWRkXCIpO1xuICAgIGFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLmhhbmRsZUFkZFRvZG8pO1xuICB9XG5cbiAgc3RhdGljIGhhbmRsZUFkZFRvZG8oKSB7XG4gICAgY29uc3QgdG9kb0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9cIik7XG4gICAgY29uc3QgZGF0YVRvZG9LZXkgPSB0b2RvRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG8ta2V5XCIpO1xuICAgIGNvbnN0IGRhdGFUb2RvVmFsdWUgPSB0b2RvRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG8tdmFsdWVcIik7XG4gICAgVG9kby5hZGQoXG4gICAgICBkYXRhVG9kb1ZhbHVlLFxuICAgICAgXCJuYW1lXCIsXG4gICAgICBcInRpdGxlXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCIsXG4gICAgICBcImR1ZSBkYXRlXCIsXG4gICAgICBcInByaW9yaXR5XCIsXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgY29uc3QgYWRkVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbF9fdG9kb1wiKTtcbiAgICBhZGRUb2RvTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB0b2RvRWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gICAgVUkuZGlzcGxheVRvZG9zKGRhdGFUb2RvS2V5LCBkYXRhVG9kb1ZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0Q2FuY2VsVG9kb01vZGFsKCkge1xuICAgIGNvbnN0IGNhbmNlbFRvZG9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsX190b2RvX19jYW5jZWxcIik7XG5cbiAgICBjYW5jZWxUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxfX3RvZG9cIik7XG4gICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxfX3RvZG9fX2lucHV0LS1uYW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRvZG9MaXN0SWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGZpbmlzaGVkKSB7XG4gICAgdGhpcy50b2RvTGlzdElkID0gdG9kb0xpc3RJZDtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZmluaXNoZWQgPSBmaW5pc2hlZDtcbiAgfVxuXG4gIHN0YXRpYyBpbnN0YW5jZXMgPSBbXTtcblxuICBzdGF0aWMgYWRkKHRvZG9MaXN0SWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGZpbmlzaGVkKSB7XG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKFxuICAgICAgdG9kb0xpc3RJZCxcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkdWVEYXRlLFxuICAgICAgcHJpb3JpdHksXG4gICAgICBmaW5pc2hlZFxuICAgICk7XG4gICAgVG9kby5pbnN0YW5jZXMucHVzaCh0b2RvKTtcbiAgfVxufVxuIiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLmlkID0gVG9kb0xpc3QuZ2VuZXJhdGVVbmlxdWVJZCgpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzdGF0aWMgaW5zdGFuY2VzID0gW107XG5cbiAgc3RhdGljIGdlbmVyYXRlVW5pcXVlSWQoKSB7XG4gICAgY29uc3QgdW5pcXVlSWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwKTtcbiAgICByZXR1cm4gdW5pcXVlSWQ7XG4gIH1cblxuICBzdGF0aWMgYWRkKG5hbWUpIHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IG5ldyBUb2RvTGlzdChuYW1lKTtcbiAgICBUb2RvTGlzdC5pbnN0YW5jZXMucHVzaCh0b2RvTGlzdCk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlKGlkKSB7XG4gICAgVG9kb0xpc3QuaW5zdGFuY2VzID0gVG9kb0xpc3QuaW5zdGFuY2VzLmZpbHRlcihcbiAgICAgIChpbnN0YW5jZSkgPT4gaW5zdGFuY2UuaWQgIT09IGlkXG4gICAgKTtcbiAgICBUb2RvLmluc3RhbmNlcyA9IFRvZG8uaW5zdGFuY2VzLmZpbHRlcigodG9kbykgPT4gdG9kby50b2RvTGlzdElkICE9PSBpZCk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFVJIGZyb20gXCIuL21vZHVsZXMvVUlcIjtcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi9tb2R1bGVzL3RvZG9MaXN0XCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIFRvZG9MaXN0LmFkZChcImluYm94XCIpKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIFVJLmxvYWRIb21lcGFnZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=