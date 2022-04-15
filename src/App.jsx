import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './pages/Cart/Cart';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductList from './components/ProductList/ProductList';
import Users from './components/Users/Users';
import NavBar from './components/NavBar/NavBar';
import './App.scss';
import CartProvider from './context/CartContext';


function App() {
  return (
   
    <Router>
      <CartProvider>
        <div className='App'>
          <NavBar />
          <Routes>
            <Route path='cart' element={<Cart />} />
            <Route path='products' element={<ProductList />} />
            <Route path='productdetail/:id' element={<ProductDetail />} />
            <Route path='users' element={<Users/>} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
   
    
  )
}

export default App

