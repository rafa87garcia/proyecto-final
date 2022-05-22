import { NavLink } from "react-router-dom";
import "./_navUser.scss";

const NavUser = () => {
  return (
    <div>
        <div className="navUser">
      <nav>
      <ul>
        <li><NavLink to="login">Log in</NavLink></li>
        <li><NavLink to="register">Register</NavLink></li>
        <li><NavLink to="cart">Cart</NavLink></li>
    </ul>
    </nav>
    </div>
    </div>
  )
}

export default NavUser