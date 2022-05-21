import React from 'react';
import { Routes, Route } from "react-router-dom";
import Cart from './pages/Cart/Cart';
import ProductDetail from './pages/product/component/ProductDetail/ProductDetail';
import ProductList from './pages/product/component/ProductList/ProductList';
import Users from './pages/Users/Users';
import navBar from './shared/components/NavBar/navBar';

function App() {
  return (
   
    
        <div className='App'>
            <div>
    <h1>My Store</h1>
    <nav><ul>
        <li>USER</li>
        <li>CART</li>
    </ul>
    </nav>
    <div>
    <ul>
        <li>ALL PRODUCTS</li>
        <li>CATEGORIES</li>
    </ul>
    </div>
    </div>
          
          <Routes>

            <Route path='cart' element={<Cart />} />
            <Route path='/' element={<ProductList />} />
            <Route path='productdetail/:id' element={<ProductDetail />} />
            <Route path='users' element={<Users/>} />
          </Routes>
        </div>
     
   
   
    
  )
}

export default App

