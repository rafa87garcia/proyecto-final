import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { ImCross } from 'react-icons/im';

const Cart = () => {
  const {cartItems, deleteItem} = useCartContext();
  return (
    <div>
      <h2>Your products:</h2>
      {cartItems.map((item, index) => {
        return(
          <div key={index}>
            <li>
              {item.name}: {item.count}
            </li>
            <p>${item.price}</p>
            <span onClick={() => deleteItem(index)}><ImCross /></span>
          </div>
        )
      })}
    </div>
  )
}

export default Cart
