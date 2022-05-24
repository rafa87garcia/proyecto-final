import { Link } from "react-router-dom";
import './_navUser.scss'; 


const NavUser = () => {
  return (
    <div  className="navUser">
        
        <h1 className="navUser__logo">Medias Puri</h1>
        
  
      <ul className="navUser__content">
        <li><Link to="login">Log in</Link></li>
        <li><Link to="register">Register</Link></li>
        <li><Link to="cart">Cart</Link></li>
      </ul>
     </div>
  )
}

export default NavUser