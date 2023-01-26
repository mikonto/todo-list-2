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
    UI.initMenuBtn();
    UI.initDefaultTodoList();
    UI.initTodoList();
  }

  static initMenuBtn() {
    const menuBtn = document.getElementsByClassName("fa-bars")[0];
    menuBtn.addEventListener("click", UI.toggleNav);
  }

  static toggleNav() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
  }

  static initDefaultTodoList() {
    const index = document.getElementById("inbox");
    index.addEventListener("click", () => {
      UI.updateTasks(_todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances[0].id);
    });
  }

  static initTodoList() {
    const todoListElem = document.getElementById("todo-lists");
    todoListElem.textContent = "";

    for (let i = 1; i < _todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances.length; i += 1) {
      const button = document.createElement("button");
      button.innerText = `${_todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances[i].name}`;
      todoListElem.appendChild(button);
      button.addEventListener("click", () => {
        UI.updateTasks(_todoList__WEBPACK_IMPORTED_MODULE_0__["default"].instances[i].id);
      });
    }
  }

  static updateTasks(todoListId) {
    const main = document.getElementById("main");
    main.textContent = "";
    for (let i = 0; i < _todo__WEBPACK_IMPORTED_MODULE_1__["default"].instances.length; i++) {
      if (_todo__WEBPACK_IMPORTED_MODULE_1__["default"].instances[i].todoListId === todoListId) {
        const mainElem = document.getElementById("main");
        let innerHTML = "";
        const keys = Object.keys(_todo__WEBPACK_IMPORTED_MODULE_1__["default"].instances[i]);
        for (let j = 0; j < keys.length; j++) {
          innerHTML += `${keys[j]}: ${_todo__WEBPACK_IMPORTED_MODULE_1__["default"].instances[i][keys[j]]}<br>`;
        }
        mainElem.innerHTML = innerHTML;
      }
    }
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
  _modules_todoList__WEBPACK_IMPORTED_MODULE_1__["default"].add("Test");
});
document.addEventListener("DOMContentLoaded", () => {
  _modules_todoList__WEBPACK_IMPORTED_MODULE_1__["default"].add("More test");
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

  _modules_todo__WEBPACK_IMPORTED_MODULE_2__["default"].add(
    2,
    "dsadasTest todsao",
    "Descriptiodsadsan for ftodo",
    "Due date hdsasfafasdsaere",
    "Prioritydsadsa Low, Mefsafdium or High",
    true
  );

});

document.addEventListener("DOMContentLoaded", _modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"].loadHomepage);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ1I7O0FBRVg7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpRUFBd0I7QUFDN0MsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsSUFBSSxrRUFBeUIsRUFBRTtBQUNuRDtBQUNBLDRCQUE0QiwyREFBa0IsU0FBUztBQUN2RDtBQUNBO0FBQ0EsdUJBQXVCLDJEQUFrQjtBQUN6QyxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsSUFBSSw4REFBcUIsRUFBRTtBQUMvQyxVQUFVLHVEQUFjO0FBQ3hCO0FBQ0E7QUFDQSxpQ0FBaUMsdURBQWM7QUFDL0Msd0JBQXdCLGlCQUFpQjtBQUN6QywwQkFBMEIsUUFBUSxJQUFJLHVEQUFjLGFBQWE7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4RGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ25CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOOEI7QUFDWTtBQUNSOztBQUVsQyw4Q0FBOEMsOERBQWE7QUFDM0Q7QUFDQSxFQUFFLDZEQUFZO0FBQ2QsQ0FBQztBQUNEO0FBQ0EsRUFBRSw2REFBWTtBQUNkLENBQUM7O0FBRUQ7QUFDQSxFQUFFLHlEQUFRO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSx5REFBUTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUseURBQVE7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVELDhDQUE4QyxnRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC0yLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LTIvLi9zcmMvbW9kdWxlcy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC0yLy4vc3JjL21vZHVsZXMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LTIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LTIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC0yL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LTIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtMi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vdG9kb0xpc3RcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuICBzdGF0aWMgbG9hZEhvbWVwYWdlKCkge1xuICAgIFVJLmluaXRNZW51QnRuKCk7XG4gICAgVUkuaW5pdERlZmF1bHRUb2RvTGlzdCgpO1xuICAgIFVJLmluaXRUb2RvTGlzdCgpO1xuICB9XG5cbiAgc3RhdGljIGluaXRNZW51QnRuKCkge1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZmEtYmFyc1wiKVswXTtcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS50b2dnbGVOYXYpO1xuICB9XG5cbiAgc3RhdGljIHRvZ2dsZU5hdigpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0RGVmYXVsdFRvZG9MaXN0KCkge1xuICAgIGNvbnN0IGluZGV4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmJveFwiKTtcbiAgICBpbmRleC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgVUkudXBkYXRlVGFza3MoVG9kb0xpc3QuaW5zdGFuY2VzWzBdLmlkKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0VG9kb0xpc3QoKSB7XG4gICAgY29uc3QgdG9kb0xpc3RFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWxpc3RzXCIpO1xuICAgIHRvZG9MaXN0RWxlbS50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IFRvZG9MaXN0Lmluc3RhbmNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBgJHtUb2RvTGlzdC5pbnN0YW5jZXNbaV0ubmFtZX1gO1xuICAgICAgdG9kb0xpc3RFbGVtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgVUkudXBkYXRlVGFza3MoVG9kb0xpc3QuaW5zdGFuY2VzW2ldLmlkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVUYXNrcyh0b2RvTGlzdElkKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFRvZG8uaW5zdGFuY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoVG9kby5pbnN0YW5jZXNbaV0udG9kb0xpc3RJZCA9PT0gdG9kb0xpc3RJZCkge1xuICAgICAgICBjb25zdCBtYWluRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICAgICAgbGV0IGlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhUb2RvLmluc3RhbmNlc1tpXSk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwga2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGlubmVySFRNTCArPSBgJHtrZXlzW2pdfTogJHtUb2RvLmluc3RhbmNlc1tpXVtrZXlzW2pdXX08YnI+YDtcbiAgICAgICAgfVxuICAgICAgICBtYWluRWxlbS5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IodG9kb0xpc3RJZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZmluaXNoZWQpIHtcbiAgICB0aGlzLnRvZG9MaXN0SWQgPSB0b2RvTGlzdElkO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5maW5pc2hlZCA9IGZpbmlzaGVkO1xuICB9XG5cbiAgc3RhdGljIGluc3RhbmNlcyA9IFtdO1xuXG4gIHN0YXRpYyBhZGQodG9kb0xpc3RJZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZmluaXNoZWQpIHtcbiAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8oXG4gICAgICB0b2RvTGlzdElkLFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGUsXG4gICAgICBwcmlvcml0eSxcbiAgICAgIGZpbmlzaGVkXG4gICAgKTtcbiAgICBUb2RvLmluc3RhbmNlcy5wdXNoKHRvZG8pO1xuICB9XG59XG4iLCJsZXQgaWQgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICBpZCArPSAxO1xuICB9XG5cbiAgc3RhdGljIGluc3RhbmNlcyA9IFtdO1xuXG4gIHN0YXRpYyBpbml0KCkge1xuICAgIFRvZG9MaXN0LmFkZChcIkluZGV4XCIpO1xuICB9XG5cbiAgc3RhdGljIGFkZChuYW1lKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QobmFtZSk7XG4gICAgVG9kb0xpc3QuaW5zdGFuY2VzLnB1c2godG9kb0xpc3QpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBVSSBmcm9tIFwiLi9tb2R1bGVzL1VJXCI7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vbW9kdWxlcy90b2RvTGlzdFwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vbW9kdWxlcy90b2RvXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIFRvZG9MaXN0LmluaXQpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBUb2RvTGlzdC5hZGQoXCJUZXN0XCIpO1xufSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIFRvZG9MaXN0LmFkZChcIk1vcmUgdGVzdFwiKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIFRvZG8uYWRkKFxuICAgIDAsXG4gICAgXCJUZXN0IHRvZG9cIixcbiAgICBcIkRlc2NyaXB0aW9uIGZvciB0b2RvXCIsXG4gICAgXCJEdWUgZGF0ZSBoZXJlXCIsXG4gICAgXCJQcmlvcml0eSBMb3csIE1lZGl1bSBvciBIaWdoXCIsXG4gICAgZmFsc2VcbiAgKTtcblxuICBUb2RvLmFkZChcbiAgICAxLFxuICAgIFwiVGVzdCB0b2RzYW9cIixcbiAgICBcIkRlc2NyaXB0aW9kc2Fkc2FuIGZvciB0b2RvXCIsXG4gICAgXCJEdWUgZGF0ZSBoZHNhZHNhZXJlXCIsXG4gICAgXCJQcmlvcml0eWRzYWRzYSBMb3csIE1lZGl1bSBvciBIaWdoXCIsXG4gICAgZmFsc2VcbiAgKTtcblxuICBUb2RvLmFkZChcbiAgICAyLFxuICAgIFwiZHNhZGFzVGVzdCB0b2RzYW9cIixcbiAgICBcIkRlc2NyaXB0aW9kc2Fkc2FuIGZvciBmdG9kb1wiLFxuICAgIFwiRHVlIGRhdGUgaGRzYXNmYWZhc2RzYWVyZVwiLFxuICAgIFwiUHJpb3JpdHlkc2Fkc2EgTG93LCBNZWZzYWZkaXVtIG9yIEhpZ2hcIixcbiAgICB0cnVlXG4gICk7XG5cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBVSS5sb2FkSG9tZXBhZ2UpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9