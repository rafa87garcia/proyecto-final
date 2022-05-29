import { Badge, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useShoppingCart from "../../../hooks/useShoppingCart";
import './_navUser.scss';

import useUser from "../../../hooks/useUser";

const NavUser = () => {

  const { cart } = useShoppingCart();
  const { userCurrent } = useUser();

  return (
    <div className="navUser">
      <h1 className="navUser__logo">Puri Sport</h1>
      <ul className="navUser__content">

        <li><Link to="login" >Log in</Link></li>
        <li><Link to="register">Register</Link></li>
        <li>
        
        { cart.length !== 0 && (
          <Badge pill bg="danger" text="light">
            {cart.length}
          </Badge>
        )}
          <Link to="cart">
            <AiOutlineShoppingCart style={{
            fontSize: "28px",
          }} />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavUser