import { Link } from "react-router-dom";
import "./_navBar.scss";


const NavBar = () => {
  return (
    <div className="navBar">
    <ul>
        <li><Link to="/">All Products</Link></li>
        <li><Link to="contact">Contact</Link></li>
        <li><Link to="admin">Admin</Link></li>
        <li><Link to="orders">My orders</Link></li>
    </ul>
    </div>
  )
}

export default NavBar;