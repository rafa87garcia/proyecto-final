import React from 'react'
import './_orders.scss';
const Orders = () => {
  return (
    <div className='Order'>
    
    <h1 className='title'>My Orders</h1>
    <ul className='list'>
      <li>Order 1
        <ul className='orderDetail'>
          <li>name:</li>
          <li>description:</li>
          <li>image:</li>
          <li>pvp: </li>
          <li>category: </li>
      </ul>
      </li>
      <li>Order 2
      <ul className='orderDetail'>
          <li>name:</li>
          <li>description:</li>
          <li>image:</li>
          <li>pvp: </li>
          <li>category: </li>
        </ul>
      </li>
      <li>Order 3
      <ul className='orderDetail'>
          <li>name:</li>
          <li>description:</li>
          <li>image:</li>
          <li>pvp: </li>
          <li>category: </li>
        </ul>
      </li>
      <li>Order 4
      <ul className='orderDetail'>
          <li>name:</li>
          <li>description:</li>
          <li>image:</li>
          <li>pvp: </li>
          <li>category: </li>
        </ul>
      </li>
    </ul>
    </div>
  )
}

export default Orders
