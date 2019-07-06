"use strict";

import Task from "./Task.js";
import TaskInput from "./TaskInput.js";

const TodoList = {
  init(options) {
    this._listWrapper = options.listWrapper;
    this._tasks = [];
    this._addListListeners();
    TaskInput.init(options);
    this.clearTasks = this.clearTasks.bind(this);
  },

  _render(taskElement) {
    this._listWrapper.prepend(taskElement);
  },

  _renderMany(tasks) {
    tasks.forEach(task => {
      const taskObject = Task.create(task);
      this._render(taskObject);
    });
  },

  removeTask(key) {
    this._tasks = this._tasks.filter(task => task.key !== key);
  },

  getTasks() {
    return this._tasks;
  },

  _saveTasks() {
    window.localStorage.setItem("tasks", JSON.stringify(this._tasks));
  },

  loadTasks() {
    if (window.localStorage.tasks) {
      this._tasks = JSON.parse(window.localStorage.getItem("tasks"));
    }
    this._renderExists();
  },

  _renderExists() {
    this._renderMany(this._tasks);
  },

  clearTasks() {
    Array.from(this._listWrapper.querySelectorAll(".task")).forEach(elem =>
      elem.remove()
    );
    this._tasks = [];
  },
  _addListListeners() {
    this._listWrapper.addEventListener("click", event => {
      if (event.target.classList.contains("task__close")) {
        event.target.parentElement.remove();
        this.removeTask(event.target.parentElement.key);
      }
    });
    window.addEventListener("unload", () => {
      this._saveTasks();
    });
  }
};

Object.setPrototypeOf(TaskInput, TodoList);

export default TodoList;
