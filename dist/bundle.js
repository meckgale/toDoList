(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["bundle"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _toDoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoList */ "./src/toDoList.js");
/* harmony import */ var _toDoList__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_toDoList__WEBPACK_IMPORTED_MODULE_1__);



let firstTask = new _task__WEBPACK_IMPORTED_MODULE_0__["default"]('projeye basla', 'yarin', 'onemli')
console.log(firstTask)


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(name, dueDate, priority) {
        this.name = name
        this.date = dueDate
        this.priority = priority
    }

    setName(name) {
        this.name = name
    }

    getName() {
        return this.name
    }

    setDate(dueDate) {
        this.dueDate = dueDate
    }

    getDate() {
        return this.dueDate
    }

    setPriority(priority) {
        this.priority = priority
    }

    getPriority() {
        return this.priority
    }
}

/***/ }),

/***/ "./src/toDoList.js":
/*!*************************!*\
  !*** ./src/toDoList.js ***!
  \*************************/
/***/ (() => {



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDUTs7QUFFakMsb0JBQW9CLDZDQUFJO0FBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7O0FDSmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvRG9MaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIlxuaW1wb3J0IHRvRG9MaXN0IGZyb20gXCIuL3RvRG9MaXN0XCJcblxubGV0IGZpcnN0VGFzayA9IG5ldyBUYXNrKCdwcm9qZXllIGJhc2xhJywgJ3lhcmluJywgJ29uZW1saScpXG5jb25zb2xlLmxvZyhmaXJzdFRhc2spXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZGF0ZSA9IGR1ZURhdGVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgfVxuXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lXG4gICAgfVxuXG4gICAgc2V0RGF0ZShkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICB9XG5cbiAgICBnZXREYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlXG4gICAgfVxuXG4gICAgc2V0UHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgfVxuXG4gICAgZ2V0UHJpb3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5XG4gICAgfVxufSIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==