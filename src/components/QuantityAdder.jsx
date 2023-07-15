import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addItem } from '../features/auth/authSlice'
import './QuantityAdder.css'



const QuantityAdder = ({id ,image , name}) => {
 
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user,iserror,isSuccess,message } = useSelector((state)=> state.user)

    const [counter,setCounter] = useState(1)

    const handleClick =()=>{
      if(!user){
        navigate('/container/login')
      }
      const item = {
        id: id,
        quantity: counter,
        image: image,
        name: name
      }
      dispatch(addItem(item))
      navigate('/container/cart')
    }

    const handleIncrement=()=>{
      if(counter < 9 ){
        setCounter(counter + 1)
      } else {
        setCounter(9)
      }
      
    }
    const handleDecrement =()=>{
      if(counter > 1){
        setCounter(counter - 1)
      } else {
        setCounter(1)
      }
    }

  return (
    <div>
        <div className='quantityMaster'>
            <button className='qm-1' onClick={handleDecrement}>-</button>
            <p>{counter}</p>
            <button className='qm-1' onClick={handleIncrement}>+</button>
        </div>
        <div className='ob-1'>
        <button className='qm-2' onClick={handleClick}>Add to Cart</button>
        </div>
    </div>
  )
}

export default QuantityAdder