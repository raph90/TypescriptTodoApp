import { hello } from "./views/test";
import "../css/main.scss";
import '@fortawesome/fontawesome-free/js/all'
import axios, { AxiosResponse } from "axios"
const hi = hello("Agatha");

const localState = {
    data: Object
}

async function getData(): Promise<any> {
    const data = await axios.get('/api/hello');
    localState.data = data.data
    console.log(localState)
}

getData();


