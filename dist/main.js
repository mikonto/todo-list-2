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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");



class UI {
  static loadHomepage() {
    UI.initMenuBtn();
    UI.updateDefaultProjectList();
    UI.updateProjectsList();
    UI.updateTasks(_project__WEBPACK_IMPORTED_MODULE_0__["default"].index);
  }

  static initMenuBtn() {
    const menuBtn = document.getElementsByClassName("fa-bars")[0];
    menuBtn.addEventListener("click", UI.toggleNav);
  }

  static toggleNav() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
  }

  static updateDefaultProjectList() {
    const index = document.getElementById("index");

    index.addEventListener("click", () => {
      UI.updateTasks(_project__WEBPACK_IMPORTED_MODULE_0__["default"].index);
    });
  }

  static updateProjectsList() {
    const projectsList = document.getElementById("projects-list");
    _project__WEBPACK_IMPORTED_MODULE_0__["default"].instances.forEach((object) => {
      if (object !== _project__WEBPACK_IMPORTED_MODULE_0__["default"].index) {
        Object.entries(object).forEach(() => {
          const button = document.createElement("button");
          button.innerText = `${object.name}`;
          projectsList.appendChild(button);

          button.addEventListener("click", () => {
            UI.updateTasks(object);
          });
        });
      }
    });
  }

  static updateTasks(project) {
    const main = document.getElementById("main");
    main.textContent = "";
    _task__WEBPACK_IMPORTED_MODULE_1__["default"].instances.forEach((object) => {
      if (object.project === project && object.finished === false) {
        Object.entries(object).forEach(([key, value]) => {
          main.innerHTML += `${key}: ${value} <br>`;
        });
      }
    });
  }
}


/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor(name) {
    this.name = name;
    this.addToArray();
  }

  addToArray() {
    Project.instances.push(this);
  }

  static instances = [];

  static index = new Project("index");

  static userProj1 = new Project("User project 1");

  static userProj2 = new Project("User project 2");
}


/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");


class Task {
  constructor(project, title, description, dueDate, priority, finished) {
    this.project = project;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.finished = finished;
    this.addToArray();
  }

  addToArray() {
    Task.instances.push(this);
  }

  static instances = [];

  static task1 = new Task(
    _project__WEBPACK_IMPORTED_MODULE_0__["default"].index,
    "Gym",
    "Go to the gym now",
    "Due date will be here",
    "High priority",
    false
  );

  static task2 = new Task(
    _project__WEBPACK_IMPORTED_MODULE_0__["default"].index,
    "Gym",
    "Go to the gym now",
    "Due date will be here",
    "High priority",
    true
  );

  static task3 = new Task(
    _project__WEBPACK_IMPORTED_MODULE_0__["default"].userProj1,
    "Gym project 1",
    "Go to the gym now 3131",
    "Due date will be heredsafsa",
    "High priority",
    false
  );
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


document.addEventListener("DOMContentLoaded", _modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"].loadHomepage);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ047O0FBRVg7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzREFBYTtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHNEQUFhO0FBQ2xDLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxrRUFBeUI7QUFDN0IscUJBQXFCLHNEQUFhO0FBQ2xDO0FBQ0E7QUFDQSxnQ0FBZ0MsWUFBWTtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUFzQjtBQUMxQjtBQUNBO0FBQ0EsK0JBQStCLElBQUksSUFBSSxPQUFPO0FBQzlDLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6RGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCZ0M7O0FBRWpCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksc0RBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxzREFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDBEQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzdDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjhCOztBQUU5Qiw4Q0FBOEMsZ0VBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtMi8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC0yLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtMi8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LTIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LTIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC0yL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LTIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtMi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgc3RhdGljIGxvYWRIb21lcGFnZSgpIHtcbiAgICBVSS5pbml0TWVudUJ0bigpO1xuICAgIFVJLnVwZGF0ZURlZmF1bHRQcm9qZWN0TGlzdCgpO1xuICAgIFVJLnVwZGF0ZVByb2plY3RzTGlzdCgpO1xuICAgIFVJLnVwZGF0ZVRhc2tzKFByb2plY3QuaW5kZXgpO1xuICB9XG5cbiAgc3RhdGljIGluaXRNZW51QnRuKCkge1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZmEtYmFyc1wiKVswXTtcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS50b2dnbGVOYXYpO1xuICB9XG5cbiAgc3RhdGljIHRvZ2dsZU5hdigpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVEZWZhdWx0UHJvamVjdExpc3QoKSB7XG4gICAgY29uc3QgaW5kZXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZGV4XCIpO1xuXG4gICAgaW5kZXguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIFVJLnVwZGF0ZVRhc2tzKFByb2plY3QuaW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVByb2plY3RzTGlzdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWxpc3RcIik7XG4gICAgUHJvamVjdC5pbnN0YW5jZXMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBpZiAob2JqZWN0ICE9PSBQcm9qZWN0LmluZGV4KSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKG9iamVjdCkuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gYCR7b2JqZWN0Lm5hbWV9YDtcbiAgICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgVUkudXBkYXRlVGFza3Mob2JqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlVGFza3MocHJvamVjdCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgVGFzay5pbnN0YW5jZXMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBpZiAob2JqZWN0LnByb2plY3QgPT09IHByb2plY3QgJiYgb2JqZWN0LmZpbmlzaGVkID09PSBmYWxzZSkge1xuICAgICAgICBPYmplY3QuZW50cmllcyhvYmplY3QpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgIG1haW4uaW5uZXJIVE1MICs9IGAke2tleX06ICR7dmFsdWV9IDxicj5gO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYWRkVG9BcnJheSgpO1xuICB9XG5cbiAgYWRkVG9BcnJheSgpIHtcbiAgICBQcm9qZWN0Lmluc3RhbmNlcy5wdXNoKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGluc3RhbmNlcyA9IFtdO1xuXG4gIHN0YXRpYyBpbmRleCA9IG5ldyBQcm9qZWN0KFwiaW5kZXhcIik7XG5cbiAgc3RhdGljIHVzZXJQcm9qMSA9IG5ldyBQcm9qZWN0KFwiVXNlciBwcm9qZWN0IDFcIik7XG5cbiAgc3RhdGljIHVzZXJQcm9qMiA9IG5ldyBQcm9qZWN0KFwiVXNlciBwcm9qZWN0IDJcIik7XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBmaW5pc2hlZCkge1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmZpbmlzaGVkID0gZmluaXNoZWQ7XG4gICAgdGhpcy5hZGRUb0FycmF5KCk7XG4gIH1cblxuICBhZGRUb0FycmF5KCkge1xuICAgIFRhc2suaW5zdGFuY2VzLnB1c2godGhpcyk7XG4gIH1cblxuICBzdGF0aWMgaW5zdGFuY2VzID0gW107XG5cbiAgc3RhdGljIHRhc2sxID0gbmV3IFRhc2soXG4gICAgUHJvamVjdC5pbmRleCxcbiAgICBcIkd5bVwiLFxuICAgIFwiR28gdG8gdGhlIGd5bSBub3dcIixcbiAgICBcIkR1ZSBkYXRlIHdpbGwgYmUgaGVyZVwiLFxuICAgIFwiSGlnaCBwcmlvcml0eVwiLFxuICAgIGZhbHNlXG4gICk7XG5cbiAgc3RhdGljIHRhc2syID0gbmV3IFRhc2soXG4gICAgUHJvamVjdC5pbmRleCxcbiAgICBcIkd5bVwiLFxuICAgIFwiR28gdG8gdGhlIGd5bSBub3dcIixcbiAgICBcIkR1ZSBkYXRlIHdpbGwgYmUgaGVyZVwiLFxuICAgIFwiSGlnaCBwcmlvcml0eVwiLFxuICAgIHRydWVcbiAgKTtcblxuICBzdGF0aWMgdGFzazMgPSBuZXcgVGFzayhcbiAgICBQcm9qZWN0LnVzZXJQcm9qMSxcbiAgICBcIkd5bSBwcm9qZWN0IDFcIixcbiAgICBcIkdvIHRvIHRoZSBneW0gbm93IDMxMzFcIixcbiAgICBcIkR1ZSBkYXRlIHdpbGwgYmUgaGVyZWRzYWZzYVwiLFxuICAgIFwiSGlnaCBwcmlvcml0eVwiLFxuICAgIGZhbHNlXG4gICk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBVSSBmcm9tIFwiLi9tb2R1bGVzL1VJXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIFVJLmxvYWRIb21lcGFnZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=