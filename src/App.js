import React from 'react';
import { Routes, Route } from "react-router-dom";
import Cart from './pages/Cart/Cart';
import ProductDetail from './pages/product/component/ProductDetail/ProductDetail';
import ProductList from './pages/product/component/ProductList/ProductList';
import Users from './pages/Users/Users';
import Layout from './shared/components/Layout/Layout';
import Header from './shared/components/Header/Header';
import LogIn from './pages/LogIn/LogIn';
import Admin from './pages/Admin/Admin';
import Contact from  './pages/Contact/Contact';
import Register from './pages/Register/Register';





function App() {
  return (
   
        <Layout>
          <Header/>
          <Routes>
            <Route path='cart' element={<Cart />} />
            <Route path='login' element={<LogIn />} />
            <Route path='admin' element={<Admin />} />
            <Route path='contact' element={<Contact />} />
            <Route path='register' element={<Register />} />
            <Route path='/' element={<ProductList />} />
            <Route path='productdetail/:id' element={<ProductDetail />} />
            <Route path='users' element={<Users/>} />
          </Routes>
       
        </Layout>
     
  )
}

export default App;

