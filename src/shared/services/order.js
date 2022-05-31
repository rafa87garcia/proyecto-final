import axios from "axios";
import config from "../../data/config";

const endpoint = "orders";
const baseURL = `${config.baseUrl}`;
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