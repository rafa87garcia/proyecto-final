// import { ReactDOM } from 'react';
import React from 'react'
import './_Orders.scss';


const Order = (data) => {
  
  return (
    <div className="Order">
        <ul className='list'>
          <div className='&__titleLi'>data._id
            <ul className='orderDetail'>
              <li >{data.nº}</li>
              <li >{data.product} </li>
              <li >{data.user} </li>
            </ul>
          </div>
      </ul>
    </div>
  )
}

export default Order

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