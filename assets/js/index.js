"use strict";

import TodoList from "./modules/TodoList.js";
import style from "../style/style.scss";

const listWrapper = document.querySelector(".todo-list");
const headerInput = document.querySelector(".todo-list__header-text");
const textInput = document.querySelector(".todo-list__text");
const addButton = document.querySelector(".todo-list__add");
const clearButton = document.querySelector(".todo-list__clear");
const inputWrapper = document.querySelector(".todo-list__header");

const options = {
  listWrapper,
  headerInput,
  textInput,
  addButton,
  clearButton,
  inputWrapper
};

// window.localStorage.clear();

TodoList.init(options);
TodoList.loadTasks();
