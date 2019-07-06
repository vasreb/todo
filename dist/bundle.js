/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_TodoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/TodoList.js */ \"./assets/js/modules/TodoList.js\");\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/style.scss */ \"./assets/style/style.scss\");\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nvar listWrapper = document.querySelector('.todo-list');\nvar headerInput = document.querySelector('.todo-list__header-text');\nvar textInput = document.querySelector('.todo-list__text');\nvar addButton = document.querySelector('.todo-list__add');\nvar clearButton = document.querySelector('.todo-list__clear');\nvar options = {\n  listWrapper: listWrapper,\n  headerInput: headerInput,\n  textInput: textInput,\n  addButton: addButton,\n  clearButton: clearButton // window.localStorage.clear();\n\n};\nvar list = new _modules_TodoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](options);\nlist.loadTasks();\n\n//# sourceURL=webpack:///./assets/js/index.js?");

/***/ }),

/***/ "./assets/js/modules/Task.js":
/*!***********************************!*\
  !*** ./assets/js/modules/Task.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Task; });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Task =\n/*#__PURE__*/\nfunction () {\n  function Task(options, number) {\n    _classCallCheck(this, Task);\n\n    this.node = this._createTaskElement(options);\n    this.node.number = number;\n  }\n\n  _createClass(Task, [{\n    key: \"_createTaskElement\",\n    value: function _createTaskElement(_ref) {\n      var headerText = _ref.headerText,\n          text = _ref.text;\n      var taskWrapper = document.createElement('article');\n      taskWrapper.classList.add('task');\n      var taskHeader = document.createElement('h2');\n      taskHeader.append(document.createTextNode(headerText));\n      taskHeader.classList.add('task__header');\n      var taskText = document.createElement('p');\n      taskText.append(document.createTextNode(text));\n      taskText.classList.add('task__text');\n      var taskClose = document.createElement('button');\n      taskClose.classList.add('task__close');\n      taskClose.innerHTML = 'X';\n      taskWrapper.append(taskClose);\n      taskWrapper.append(taskHeader);\n      taskWrapper.append(taskText);\n      return taskWrapper;\n    }\n  }, {\n    key: \"_removeTaskElement\",\n    value: function _removeTaskElement() {\n      this.node.remove();\n    }\n  }]);\n\n  return Task;\n}();\n\n\n\n//# sourceURL=webpack:///./assets/js/modules/Task.js?");

/***/ }),

/***/ "./assets/js/modules/TodoList.js":
/*!***************************************!*\
  !*** ./assets/js/modules/TodoList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ToDoList; });\n/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ \"./assets/js/modules/Task.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar ToDoList =\n/*#__PURE__*/\nfunction () {\n  function ToDoList(options) {\n    _classCallCheck(this, ToDoList);\n\n    this._nodes = {\n      listWrapper: options.listWrapper,\n      addButton: options.addButton,\n      clearButton: options.clearButton,\n      headerInput: options.headerInput,\n      textInput: options.textInput\n    };\n    this._tasks = [];\n\n    this._addListeners();\n  }\n\n  _createClass(ToDoList, [{\n    key: \"addTask\",\n    value: function addTask() {\n      var headerText = this._nodes.headerInput.value;\n      var text = this._nodes.textInput.value;\n      var task = new _Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        headerText: headerText,\n        text: text\n      }, Object.keys(this._tasks).length);\n\n      this._tasks.push({\n        headerText: headerText,\n        text: text\n      });\n\n      this._render(task.node);\n\n      this._saveTasks();\n    }\n  }, {\n    key: \"_render\",\n    value: function _render(taskElem) {\n      this._nodes.listWrapper.children[0].after(taskElem);\n    }\n  }, {\n    key: \"_renderAllExists\",\n    value: function _renderAllExists() {\n      for (var index in this._tasks) {\n        var taskObj = new _Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n          headerText: this._tasks[index].headerText,\n          text: this._tasks[index].text\n        }, index);\n\n        this._render(taskObj.node);\n      }\n    }\n  }, {\n    key: \"removeTask\",\n    value: function removeTask(n) {\n      this._tasks.splice(n, 1);\n\n      this._saveTasks();\n    }\n  }, {\n    key: \"_clearInputs\",\n    value: function _clearInputs() {\n      this._nodes.headerInput.value = \"\";\n      this._nodes.textInput.value = \"\";\n    }\n  }, {\n    key: \"_addListeners\",\n    value: function _addListeners() {\n      var _this = this;\n\n      this._nodes.listWrapper.addEventListener('click', function (event) {\n        if (event.target == _this._nodes.addButton) {\n          _this.addTask();\n\n          _this._clearInputs();\n        } else if (event.target.classList.contains('task__close')) {\n          event.target.parentElement.remove();\n\n          _this.removeTask(event.target.parentElement.number);\n        } else if (event.target == _this._nodes.clearButton) {\n          _this.clearTasks();\n        }\n\n        ;\n      });\n    }\n  }, {\n    key: \"getTasks\",\n    value: function getTasks() {\n      return this._tasks;\n    }\n  }, {\n    key: \"_saveTasks\",\n    value: function _saveTasks() {\n      window.localStorage.setItem('tasks', JSON.stringify(this._tasks));\n    }\n  }, {\n    key: \"loadTasks\",\n    value: function loadTasks() {\n      if (window.localStorage.tasks) {\n        this._tasks = JSON.parse(window.localStorage.getItem('tasks'));\n      }\n\n      this._renderAllExists();\n    }\n  }, {\n    key: \"clearTasks\",\n    value: function clearTasks() {\n      Array.from(document.querySelectorAll('.task')).forEach(function (elem) {\n        return elem.remove();\n      });\n      this._tasks = [];\n\n      this._saveTasks();\n    }\n  }]);\n\n  return ToDoList;\n}();\n\n\n\n//# sourceURL=webpack:///./assets/js/modules/TodoList.js?");

/***/ }),

/***/ "./assets/style/style.scss":
/*!*********************************!*\
  !*** ./assets/style/style.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./assets/style/style.scss?");

/***/ })

/******/ });