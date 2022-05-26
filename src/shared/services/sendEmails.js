import axios from "axios";
import config from "../../data/config";

const endpoint = "emails";
const baseURL = `http://${config.baseUrl}:${config.port}`;
const api = axios.create({
  baseURL,
});

const emailContact = (data) => api.post(`/${endpoint}/contact`, (data) => {
debugger;
  console.log("entra");
  return data;
});


export { emailContact };