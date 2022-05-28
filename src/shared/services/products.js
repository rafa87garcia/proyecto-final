import axios from "axios";
import config from "../../data/config";

const endpoint = "products";
const baseURL = `${config.baseUrl}:${config.port}`;
const token = localStorage.getItem("token");
const api = axios.create({
  baseURL,
  headers: { 'Authorization': 'Bearer ' + token }
});

const get = () => api.get(`/${endpoint}`);

const add = (data) => api.post(`/${endpoint}`, data);

const edit = (id) => api.put(id);

const remove = (id) => api.delete(id);

export { get, add, edit, remove };