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
    const buttons = document.querySelectorAll(".nav-button");
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        buttons.forEach((b) => b.classList.remove("active"));
        event.target.classList.add("active");
      });
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
      const button = document.createElement("button");
      button.innerText = `${_todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances[i].name}`;
      button.classList.add("nav-button");
      todoListElem.appendChild(button);
      button.addEventListener("click", () => {
        UI.displayTodos("todoListId", _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances[i].id);
      });
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
    addTodoListButton.addEventListener("click", UI.handleAddTodoListModal);
  }

  static handleAddTodoListModal() {
    const { value } = document.getElementById("todo-list-name-input");
    if (value !== "") {
      _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].add(value);
      const addTodoListModal = document.getElementById("modal-todo-list");
      document.getElementById("todo-list-name-input").value = "";
      addTodoListModal.classList.toggle("active");
      UI.initButtons()
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
      }
    }
    if (innerHTML === "") {
      innerHTML = "empty";
    }
    mainElem.innerHTML = innerHTML;
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
let id = 0;

class TodoList {
  constructor(name) {
    this.id = id;
    this.name = name;
    id += 1;
  }

  static instances = [];

  static init() {
    TodoList.add("Index");
  }

  static add(name) {
    const todoList = new TodoList(name);
    TodoList.instances.push(todoList);
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
document.addEventListener("DOMContentLoaded", () => {
  _modules_todoList__WEBPACK_IMPORTED_MODULE_1__["default"].add("User project 1");
});
document.addEventListener("DOMContentLoaded", () => {
  _modules_todoList__WEBPACK_IMPORTED_MODULE_1__["default"].add("User project 2");
});

document.addEventListener("DOMContentLoaded", () => {
  _modules_todo__WEBPACK_IMPORTED_MODULE_2__["default"].add(
    0,
    "Test todo",
    "Description for todo",
    "Due date here",
    "Priority Low, Medium or High",
    false
  );

  _modules_todo__WEBPACK_IMPORTED_MODULE_2__["default"].add(
    1,
    "Test todsao",
    "Descriptiodsadsan for todo",
    "Due date hdsadsaere",
    "Prioritydsadsa Low, Medium or High",
    false
  );

});

document.addEventListener("DOMContentLoaded", _modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"].loadHomepage);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ1I7O0FBRVg7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLElBQUksa0VBQXlCLEVBQUU7QUFDbkQ7QUFDQSw0QkFBNEIsMkRBQWtCLFNBQVM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDJEQUFrQjtBQUN4RCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0EsTUFBTSxxREFBWTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsSUFBSSw4REFBcUIsRUFBRTtBQUMvQyxVQUFVLHVEQUFjO0FBQ3hCLGlDQUFpQyx1REFBYztBQUMvQyx3QkFBd0IsaUJBQWlCO0FBQ3pDLDBCQUEwQixRQUFRLElBQUksdURBQWMsYUFBYTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xIZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDbkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNZO0FBQ1I7O0FBRWxDLDhDQUE4Qyw4REFBYTtBQUMzRDtBQUNBLEVBQUUsNkRBQVk7QUFDZCxDQUFDO0FBQ0Q7QUFDQSxFQUFFLDZEQUFZO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBLEVBQUUseURBQVE7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLHlEQUFRO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRCw4Q0FBOEMsZ0VBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtMi8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC0yLy4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtMi8uL3NyYy9tb2R1bGVzL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC0yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC0yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtMi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC0yL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LTIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgc3RhdGljIGxvYWRIb21lcGFnZSgpIHtcbiAgICBVSS5pbml0QnV0dG9ucygpO1xuICAgIFVJLmRpc3BsYXlUb2RvcyhcInRvZG9MaXN0SWRcIiwgMCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdEJ1dHRvbnMoKSB7XG4gICAgVUkuaW5pdE1lbnVCdXR0b24oKTtcbiAgICBVSS5pbml0TmF2QnV0dG9uc0FsbCgpO1xuICAgIFVJLmluaXREZWZhdWx0VG9kb0xpc3RCdXR0b25zKCk7XG4gICAgVUkuaW5pdFRvZG9MaXN0QnV0dG9ucygpO1xuICAgIFVJLmluaXRBZGRUb2RvTGlzdEJ1dHRvbigpO1xuICAgIFVJLmluaXRUb2RvTGlzdE1vZGFsKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdE1lbnVCdXR0b24oKSB7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmYS1iYXJzXCIpWzBdO1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XG4gICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0TmF2QnV0dG9uc0FsbCgpIHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYnV0dG9uXCIpO1xuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICBidXR0b25zLmZvckVhY2goKGIpID0+IGIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaW5pdERlZmF1bHRUb2RvTGlzdEJ1dHRvbnMoKSB7XG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluYm94XCIpO1xuICAgIGluYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBVSS5kaXNwbGF5VG9kb3MoXCJ0b2RvTGlzdElkXCIsIDApO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGluaXRUb2RvTGlzdEJ1dHRvbnMoKSB7XG4gICAgY29uc3QgdG9kb0xpc3RFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWxpc3RzXCIpO1xuICAgIHRvZG9MaXN0RWxlbS50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IFRvZG9MaXN0Lmluc3RhbmNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBgJHtUb2RvTGlzdC5pbnN0YW5jZXNbaV0ubmFtZX1gO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uXCIpO1xuICAgICAgdG9kb0xpc3RFbGVtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgVUkuZGlzcGxheVRvZG9zKFwidG9kb0xpc3RJZFwiLCBUb2RvTGlzdC5pbnN0YW5jZXNbaV0uaWQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGluaXRBZGRUb2RvTGlzdEJ1dHRvbigpIHtcbiAgICBjb25zdCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tYWRkLXRvZG8tbGlzdFwiKTtcbiAgICBhZGRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtdG9kby1saXN0XCIpO1xuICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaW5pdFRvZG9MaXN0TW9kYWwoKSB7XG4gICAgVUkuaW5pdEFkZFRvZG9MaXN0TW9kYWwoKTtcbiAgICBVSS5pbml0Q2FuY2VsVG9kb0xpc3RNb2RhbCgpO1xuICB9XG5cbiAgc3RhdGljIGluaXRBZGRUb2RvTGlzdE1vZGFsKCkge1xuICAgIGNvbnN0IGFkZFRvZG9MaXN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC10b2RvLWxpc3QtYWRkXCIpO1xuICAgIGFkZFRvZG9MaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS5oYW5kbGVBZGRUb2RvTGlzdE1vZGFsKTtcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVBZGRUb2RvTGlzdE1vZGFsKCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1saXN0LW5hbWUtaW5wdXRcIik7XG4gICAgaWYgKHZhbHVlICE9PSBcIlwiKSB7XG4gICAgICBUb2RvTGlzdC5hZGQodmFsdWUpO1xuICAgICAgY29uc3QgYWRkVG9kb0xpc3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtdG9kby1saXN0XCIpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWxpc3QtbmFtZS1pbnB1dFwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICBhZGRUb2RvTGlzdE1vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICBVSS5pbml0QnV0dG9ucygpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGluaXRDYW5jZWxUb2RvTGlzdE1vZGFsKCkge1xuICAgIGNvbnN0IGNhbmNlbFRvZG9MaXN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcIm1vZGFsLXRvZG8tbGlzdC1jYW5jZWxcIlxuICAgICk7XG4gICAgY2FuY2VsVG9kb0xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC10b2RvLWxpc3RcIik7XG4gICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1saXN0LW5hbWUtaW5wdXRcIikudmFsdWUgPSBcIlwiO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRpc3BsYXlUb2Rvcyh0b2RvS2V5LCB0b2RvVmFsdWUpIHtcbiAgICBjb25zdCBtYWluRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBsZXQgaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFRvZG8uaW5zdGFuY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoVG9kby5pbnN0YW5jZXNbaV1bdG9kb0tleV0gPT09IHRvZG9WYWx1ZSkge1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoVG9kby5pbnN0YW5jZXNbaV0pO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGtleXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICBpbm5lckhUTUwgKz0gYCR7a2V5c1tqXX06ICR7VG9kby5pbnN0YW5jZXNbaV1ba2V5c1tqXV19PGJyPmA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlubmVySFRNTCA9PT0gXCJcIikge1xuICAgICAgaW5uZXJIVE1MID0gXCJlbXB0eVwiO1xuICAgIH1cbiAgICBtYWluRWxlbS5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0b2RvTGlzdElkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBmaW5pc2hlZCkge1xuICAgIHRoaXMudG9kb0xpc3RJZCA9IHRvZG9MaXN0SWQ7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmZpbmlzaGVkID0gZmluaXNoZWQ7XG4gIH1cblxuICBzdGF0aWMgaW5zdGFuY2VzID0gW107XG5cbiAgc3RhdGljIGFkZCh0b2RvTGlzdElkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBmaW5pc2hlZCkge1xuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyhcbiAgICAgIHRvZG9MaXN0SWQsXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZSxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgZmluaXNoZWRcbiAgICApO1xuICAgIFRvZG8uaW5zdGFuY2VzLnB1c2godG9kbyk7XG4gIH1cbn1cbiIsImxldCBpZCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIGlkICs9IDE7XG4gIH1cblxuICBzdGF0aWMgaW5zdGFuY2VzID0gW107XG5cbiAgc3RhdGljIGluaXQoKSB7XG4gICAgVG9kb0xpc3QuYWRkKFwiSW5kZXhcIik7XG4gIH1cblxuICBzdGF0aWMgYWRkKG5hbWUpIHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IG5ldyBUb2RvTGlzdChuYW1lKTtcbiAgICBUb2RvTGlzdC5pbnN0YW5jZXMucHVzaCh0b2RvTGlzdCk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFVJIGZyb20gXCIuL21vZHVsZXMvVUlcIjtcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi9tb2R1bGVzL3RvZG9MaXN0XCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9tb2R1bGVzL3RvZG9cIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgVG9kb0xpc3QuaW5pdCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIFRvZG9MaXN0LmFkZChcIlVzZXIgcHJvamVjdCAxXCIpO1xufSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIFRvZG9MaXN0LmFkZChcIlVzZXIgcHJvamVjdCAyXCIpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgVG9kby5hZGQoXG4gICAgMCxcbiAgICBcIlRlc3QgdG9kb1wiLFxuICAgIFwiRGVzY3JpcHRpb24gZm9yIHRvZG9cIixcbiAgICBcIkR1ZSBkYXRlIGhlcmVcIixcbiAgICBcIlByaW9yaXR5IExvdywgTWVkaXVtIG9yIEhpZ2hcIixcbiAgICBmYWxzZVxuICApO1xuXG4gIFRvZG8uYWRkKFxuICAgIDEsXG4gICAgXCJUZXN0IHRvZHNhb1wiLFxuICAgIFwiRGVzY3JpcHRpb2RzYWRzYW4gZm9yIHRvZG9cIixcbiAgICBcIkR1ZSBkYXRlIGhkc2Fkc2FlcmVcIixcbiAgICBcIlByaW9yaXR5ZHNhZHNhIExvdywgTWVkaXVtIG9yIEhpZ2hcIixcbiAgICBmYWxzZVxuICApO1xuXG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgVUkubG9hZEhvbWVwYWdlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==