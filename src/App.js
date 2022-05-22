import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './pages/auth/Login/Login';
import Register from './pages/auth/Register/Register';
import Cart from './pages/Cart/Cart';
import Header from './shared/components/Header/Header';
import ProductDetail from './pages/product/component/ProductDetail/ProductDetail';
import ProductList from './pages/product/component/ProductList/ProductList';
import Footer from './shared/components/Footer/Footer';




function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='/' element={<ProductList />} />
        <Route path='cart' element={<Cart />} />
        <Route path='productdetail/:id' element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

