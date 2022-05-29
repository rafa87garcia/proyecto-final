import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./_navBar.scss";
import useUser from "../../../hooks/useUser";

const NavBar = () => {

  const { userCurrent } = useUser();

  //if (!userCurrent) return ""

  useEffect(() => {


  }, []);



  return (
    <div className="navBar">
      <ul>
        <li><Link to="/">All Products</Link></li>
        <li><Link to="aboutus">About us</Link></li>
        {userCurrent && (<li><Link to="admin">Admin</Link></li>)}
        <li><Link to="admin">Admin</Link></li>
        <li><Link to="orders">My orders</Link></li>
        <li><Link to="contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default NavBar;