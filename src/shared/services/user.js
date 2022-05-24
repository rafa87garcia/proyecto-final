import axios from "axios";
import config from "../../data/config";

const endpoint = "users";
const baseURL = `https://${config.baseUrl}:${config.port}`;
const api = axios.create({
  baseURL,
});

const login = (data) => api.post('/login', data);

const get = () => api.get(`/${endpoint}`);

const add = (data) => api.post(`/${endpoint}`, data);

const edit = (id) => api.put(id);

const remove = (id) => api.delete(id);

export { get, login, add, edit, remove };