'use strict';

export default class Task {
  constructor(options, number) {
    this.node = this._createTaskElement(options);
    this.node.number = number;
  }
  _createTaskElement({headerText, text}) {
    let taskWrapper = document.createElement('article');
    taskWrapper.classList.add('task');

    let taskHeader = document.createElement('h2');
    taskHeader.append(document.createTextNode(headerText));
    taskHeader.classList.add('task__header');

    let taskText = document.createElement('p');
    taskText.append(document.createTextNode(text));
    taskText.classList.add('task__text');

    let taskClose = document.createElement('button');
    taskClose.classList.add('task__close');
    taskClose.innerHTML = 'X';

    taskWrapper.append(taskClose);
    taskWrapper.append(taskHeader);
    taskWrapper.append(taskText);
    return taskWrapper;
  }
  _removeTaskElement() {
    this.node.remove();
  }
}
