import axios from "axios";
import config from "../../data/config";


const endpoint = "users";
const baseURL = `${config.baseUrl}:${config.port}`;
const api = axios.create({
  baseURL,

});
const login = (data) => api.post(`${endpoint}/login`, data);

const get = () => api.get(`/${endpoint}`);

const add = (data) => api.post(`/${endpoint}/register`, data);

const edit = (id) => api.put(id);

const remove = (id) => api.delete(id);

export { get, login, add, edit, remove };