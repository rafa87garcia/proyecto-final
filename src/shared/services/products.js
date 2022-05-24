import axios from "axios";
import config from "../../data/config";

<<<<<<< HEAD
const endpoint = "products";
const baseURL = `https://${config.baseUrl}:${config.port}`;
const api = axios.create({
  baseURL,
});
=======
// const endpoint = "products";
// const baseURL = `https://fakestoreapi.com/products`;
// const api = axios.create({
//   baseURL,
// });
>>>>>>> andrea

const get = () => api.get(`/${endpoint}`);

const add = (data) => api.post(`/${endpoint}`, data);

const edit = (id) => api.put(id);

const remove = (id) => api.delete(id);

export { get, add, edit, remove };