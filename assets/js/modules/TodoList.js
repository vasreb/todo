'use strict'; 

import Task from './Task.js';

export default class ToDoList {
  constructor(options) {
    this._nodes = {
      listWrapper: options.listWrapper,
      addButton: options.addButton,
      clearButton: options.clearButton,
      headerInput: options.headerInput,
      textInput: options.textInput
    }
    this._tasks = [];
    this._addListeners();
  }

  addTask() {
    let headerText = this._nodes.headerInput.value;
    let text = this._nodes.textInput.value;
    let task = new Task({headerText, text}, Object.keys(this._tasks).length);
    this._tasks.push({
      headerText,
      text
    });
    this._render(task.node);
    this._saveTasks();
  }

  _render(taskElem) {
    this._nodes.listWrapper.children[0].after(taskElem);
  }

  _renderAllExists() {
    for (let index in this._tasks) {
      let taskObj = new Task({
        headerText: this._tasks[index].headerText, 
        text: this._tasks[index].text
      }, index);
      this._render(taskObj.node);
    }
  }

  removeTask(n) {
    this._tasks.splice(n, 1);
    this._saveTasks();
  }

  _clearInputs() {
    this._nodes.headerInput.value = "";
    this._nodes.textInput.value = "";
  }
  _addListeners() {
    this._nodes.listWrapper.addEventListener('click', (event) => {
      if (event.target == this._nodes.addButton) {
        this.addTask();
        this._clearInputs();
      } else if (event.target.classList.contains('task__close')) {
        event.target.parentElement.remove();
        this.removeTask(event.target.parentElement.number);
      } else if (event.target == this._nodes.clearButton) {
        this.clearTasks();
      };
    });
  }

  getTasks() {
    return this._tasks;
  }

  _saveTasks() {
    window.localStorage.setItem('tasks', JSON.stringify(this._tasks));
  }

  loadTasks() {
    if (window.localStorage.tasks) {
      this._tasks = JSON.parse(window.localStorage.getItem('tasks'));
    }
    this._renderAllExists();
  }

  clearTasks() {
    Array.from(document.querySelectorAll('.task')).forEach((elem) => elem.remove());
    this._tasks = [];
    this._saveTasks();
  }
}
