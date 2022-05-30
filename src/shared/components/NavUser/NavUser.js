import { Badge } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useShoppingCart from "../../../hooks/useShoppingCart";
import './_navUser.scss';



const NavUser = () => {

  const { cart } = useShoppingCart();
  

  return (
    <div className="navUser">
    <NavLink to='/'>
      <h1 className="navUser__logo">Puri Sport</h1>
    </NavLink>
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