import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductList from './components/ProductList/ProductList';
import Users from './components/Users/Users';



function App() {
  return (

    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/productdetail/:id' element={<ProductDetail />} />
          <Route path='users' element={<Users />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

