import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai';

const NavBar = () => {
  return (
    <nav className='navbar'>
        <Link to ='/'>Home</Link>
        <Link to='/products'>Products</Link>
        <Link to='/users'>Users</Link>
        <Link to='/cart'><AiOutlineShoppingCart className='navbar__cart'/></Link>
    </nav>
  )
}

export default NavBar