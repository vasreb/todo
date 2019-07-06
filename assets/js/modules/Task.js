"use strict";

const Task = {
  create(options) {
    return this._createTaskElement(options);
  },
  _createTaskElement({ headerText, text, key }) {
    let taskWrapper = document.createElement("article");
    taskWrapper.classList.add("task");

    let taskHeader = document.createElement("h2");
    taskHeader.append(document.createTextNode(headerText));
    taskHeader.classList.add("task__header");

    let taskText = document.createElement("p");
    taskText.append(document.createTextNode(text));
    taskText.classList.add("task__text");

    let taskClose = document.createElement("button");
    taskClose.classList.add("task__close");
    taskClose.innerHTML = "X";

    taskWrapper.append(taskClose);
    taskWrapper.append(taskHeader);
    taskWrapper.append(taskText);

    taskWrapper.key = key;

    return taskWrapper;
  }
};

export default Task;
