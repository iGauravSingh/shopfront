import React from 'react'
import './CartItem.css'
const CartItem = ({ name,image,quantity,price }) => {
  return (
    <>
      <div className='cartitemcont'>
        <img src={image} />
        <h4>{name}</h4>
        <p>{quantity}</p>
        <p>{price}</p>
    </div>
    </>
  )
}

export default CartItem