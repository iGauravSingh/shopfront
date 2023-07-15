import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { logout,reset } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state)=> state.user)

    const handleClick =()=>{
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    useEffect(()=>{
        if(!user){
            navigate('/container/login')
        }
    },[navigate,user])

  return (
    <>
        <h3>Welcome {user?.name}</h3>
        <button onClick={handleClick}>Logout</button>
        <h4>Your orders</h4>
        <h4>Order history</h4>
    </>
  )
}

export default Dashboard