import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './_navUser.scss';

import useUser from "../../../hooks/useUser";

const NavUser = () => {

  const { userCurrent } = useUser();

  return (
    <div className="navUser">
      <h1 className="navUser__logo">Puri Sport</h1>
      <ul className="navUser__content">

        <li><Link to="login" >Log in</Link></li>
        <li><Link to="register">Register</Link></li>
        <li>
          <Link to="cart">
            <AiOutlineShoppingCart />
          </Link></li>
      </ul>
    </div>
  )
}

export default NavUser