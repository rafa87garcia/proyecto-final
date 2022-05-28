// import { ReactDOM } from 'react';
import React from 'react'
import './_Orders.scss';

if (document.getElementById('Orders')) {
 
}
const Orders = () => {
  
  return (
    <div className="Order">
      <h1 className='title'>My Orders</h1>
        <ul className='list'>
          <li className='&__titleLi'>Order:
            <ul className='orderDetail'>
              <li className="&__name">name:</li>
              <li className="&__description">description:</li>
              <li className="&__pvp">pvp: </li>
              <li className="&__total">total: </li>
            </ul>
          </li>
      </ul>
    </div>
  )
}

export default Orders

//   <div >
//     {products.map((product) => {
//       return (
//         <div className="product-grid" key={product.id}>
//           <h3 className="product-grid__title">{product.title}</h3>
//           <p className="product-grid__price">{product.price}</p>
//           <img className="product-grid__image" src={product.image} alt="" />
//         </div>
//       );
//     })}
//   </div>