import { NavLink } from "react-router-dom";


const navBar = () => {
  return (
    <div>
    <ul>
        <li><NavLink to="/">All Products</NavLink></li>
        <li><NavLink to="categories">Categories</NavLink></li>
        <li><NavLink to="contact">Contact</NavLink></li>
        <li><NavLink to="admin">Admin</NavLink></li>
    </ul>
    </div>
  )
}

export default navBar