import "@fortawesome/fontawesome-free/js/all";

import "../css/main.scss";
import * as sidebarView from "./views/SidebarView";
import * as todoView from "./views/TodoView";
import axios, { AxiosResponse } from "axios";

import nodes from "./views/nodes";

import { renderTodos } from "./controllers/TodoController";
import {addTodo} from "./views/TodoView"
// async function getData(): Promise<any> {
//   const data = await axios.get("/api/hello");
//   localState.data = data.data;
//   console.log(localState);
// }

// getData();




function init(): void {
  sidebarView.initSidebarView();
  todoView.initTodoView();

  renderTodos();
}

init();
