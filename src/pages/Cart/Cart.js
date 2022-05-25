import React from 'react'
import './_cart.scss'

const Cart = () => {
  return (
    <div className='cart'>
      <h1>My order</h1>
      <ul className='cart_list'>
        <li>Order 1 <span>Price</span></li>
        <li>Order 2 <span>Price</span></li>
        <li>Order 3 <span>Price</span></li>
        <li>Order 4 <span>Price</span></li>
      </ul>
    
    </div>
  )
}

export default Cart