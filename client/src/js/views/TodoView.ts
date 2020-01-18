import nodes from "./nodes";
const { todos: todosDomElement } = nodes;
const { todos } = nodes;
import { Todo } from "../interfaces";

export const initTodoView = (): void => {};

export const cleanTodos = (): void => {
  todosDomElement.innerHTML = "";
};

const COMPLETED = "fas fa-check-circle complete";
const INCOMPLETE = "far fa-circle incomplete";
const LINE_THROUGH = "lineThrough";
const GREYED = "greyed";

export function addTodo(toDo: Todo): void {
  const text = buildTodo(toDo);
  const position = "beforeend";
  todos.insertAdjacentHTML(position, text);
}

function buildTodo(toDo: Todo): string {
  if (toDo.trashed) return;
  const DONE = toDo.completed ? COMPLETED : INCOMPLETE;
  const LINE = toDo.completed ? LINE_THROUGH : "";
  const GREY_OUT = toDo.completed ? GREYED : "";
  const text = `<li class="todo-item " id=${toDo.id} >
    <div class="todo-item__complete">
        <i class="${DONE} icon"></i>
    </div>
    <div class="todo-item__main ${GREY_OUT}">
      <div class="todo-item__main__info" >
        <div class="todo-item__main__info__icon-container">
          <i class="fas fa-bars todo-item__main__info__icon"></i>
        </div>
        <div class="todo-item__main__info__text-container ">
          <p class="todo-item__main__info__text-container__text ${LINE}">${toDo.title}</p>
        </div>
      </div>
      <div class="todo-item__main__dragger">
        <i class="fas fa-ellipsis-h todo-item__main__dragger__icon"></i>
      </div>
    </div>
  </li>`;

  return text;
}
