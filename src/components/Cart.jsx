import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CartItem from './CartItem'
import { removeItem } from '../features/auth/authSlice'
import { toast } from 'react-toastify'
//
//This is text code
import axios from 'axios'
const URL_OR = 'http://localhost:4000/order/add'
const addOrder = async (orderData)=>{
  const token = JSON.parse(localStorage.getItem('user')).token
  const config = {
    headers: {
        Authorization: `Bearer ${token}`,
    }
}
  const response = await axios.post(URL_OR ,orderData,config)
  return response.data
}
//
//

const Cart = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state)=> state.user)

  // const displayComp = <div>
  //   {user.map((uso)=> uso.name)}
  // </div>

  const noUser = <div><p>Login to see your cart</p></div>

  if(!user){
    return noUser
  }
  
  const emptyCart = <div>
    <div><h4>Welcome {user.name}</h4></div>
    <p>no item in cart</p>
  </div>

  if(user.cart.length === 0){
    return emptyCart
  }
  const findSum =()=>{
    let totalPrice = user.cart.reduce((accumulator,item)=>{
      return accumulator + (item.price * item.quantity)
    },0)
    return totalPrice
  }

  const handleShoping=()=>{
    navigate('/container/shop')
  }

  const handleCheckout=()=>{
    const userOrder = {
      userId: user._id,
      order: user.cart,
      totalAmount: findSum()
    }
    console.log(` from handlechecout ${user._id}`)
    addOrder(userOrder)
    dispatch(removeItem(user._id))
    toast('Order Placed')
    navigate('/container/dashboard')
  }
  return (
    <div>
      <div style={{textAlign: 'center'}}>
        <h3>cart</h3>
      </div>
      <div>
        {user.cart.map(itm=><CartItem key={itm.item} name={itm.name} image={itm.image} quantity={itm.quantity} price={itm.price} />)}
      </div>
      <div style={{textAlign: 'center'}}>
        <h3>Total amount: {findSum()}</h3>
        <button style={{margin: '30px'}} onClick={handleShoping}>Continue shoping</button>
        <button onClick={handleCheckout}>Checkout</button>
        
      </div>
    </div>
  )
}

export default Cart