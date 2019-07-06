import Task from "./Task";

const TaskInput = {
  init(options) {
    const {
      inputWrapper,
      addButton,
      clearButton,
      headerInput,
      textInput
    } = options;
    this._nodes = {
      inputWrapper,
      addButton,
      clearButton,
      headerInput,
      textInput
    };
    this._addInputListeners();
  },
  _addInputListeners() {
    this._nodes.inputWrapper.addEventListener("click", event => {
      switch (event.target) {
        case this._nodes.addButton:
          this._addTask();
          this._clearInputs();
          break;
        case this._nodes.clearButton:
          this.clearTasks();
          break;
      }
    });
  },
  _clearInputs() {
    this._nodes.headerInput.value = "";
    this._nodes.textInput.value = "";
  },
  _getInputData() {
    const headerText = this._nodes.headerInput.value;
    const text = this._nodes.textInput.value;
    const key = Date.now(); //timestamp id
    return {
      headerText,
      text,
      key
    };
  },
  _addTask() {
    const newTaskData = this._getInputData();
    const task = Task.create(newTaskData);
    this._tasks.push(newTaskData);
    this._render(task);
  }
};

export default TaskInput;
