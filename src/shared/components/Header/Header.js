import "./_header.scss";
import NavBar from "../NavBar/NavBar";
import NavUser from "../NavUser/NavUser";


const Header = () => {
  return (
    <div>
      
    <div>
    <NavUser />
    <h1>My Store</h1>
    
    <NavBar />
    
    </div>
    </div>
  )
}

export default Header;
