import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
    <ul>
        <li><Link to="/">All Products</Link></li>
        <li><Link to="contact">Contact</Link></li>
        <li><Link to="admin">Admin</Link></li>
    </ul>
    </div>
  )
}

export default NavBar