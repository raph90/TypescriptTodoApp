import '@fortawesome/fontawesome-free/js/all'
import { hello } from "./views/test";
import "../css/main.scss";
import * as sidebarView from "./views/SidebarView";
import * as todoView from "./views/TodoView";

import axios, { AxiosResponse } from "axios"


const localState = {
    data: Object
}


async function getData(): Promise<any> {
    const data = await axios.get('/api/hello');
    localState.data = data.data
    console.log(localState)
}

getData();
sidebarView.initSidebarView();
todoView.initTodoView();



