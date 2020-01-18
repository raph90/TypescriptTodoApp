import { Todo } from "../interfaces";
const uuid = require("uuid/v4");
import appState from "../models/appState";
import { cleanTodos, addTodo } from "../views/TodoView";
import nodes from "../views/nodes";
import { updateTodo } from "../models/TodoModel";
const { todoInput, formElement } = nodes;

export function renderTodos(): void {
  cleanTodos();
  for (const todo of appState.TODOS) addTodo(todo);
}

export function createTodo(todoVal: string): Todo {
  const newTodo = {
    id: uuid(todoVal),
    title: todoVal,
    completed: false,
    initialised: new Date(),
    trashed: false
  };
  return newTodo;
}

function toggleTodoStatus(event: Event): void {
  let target = <HTMLElement>event.target;
  console.log(target);
  if (target.classList.contains("todo-item__complete")) {
    updateTodo(target.parentElement.id);
  }
  renderTodos();
}

// EVENT LISTENERS
function createNewTodo(val: string):void{
  const todo = createTodo(val);
  appState.TODOS.push(todo);
  renderTodos();
}


formElement.addEventListener("submit", event => {
  event.preventDefault();
  let input = <HTMLInputElement>todoInput;
  createNewTodo(input.value)
  input.value=""
})

const { todos: todoUl } = nodes;

todoUl.addEventListener("click", toggleTodoStatus, true);
