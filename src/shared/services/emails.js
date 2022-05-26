import axios from "axios";
import config from "../../data/config";

const endpoint = "emails";
const baseURL = `http://${config.baseUrl}:${config.port}`;
const api = axios.create({
  baseURL,
});

const send = (data) => api.post(`/${endpoint}/contact`, data);


export { send };