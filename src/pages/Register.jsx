import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register,reset } from '../features/auth/authSlice'
import { toast } from 'react-toastify'
import './Register.css'

const Register = () => {
    const [text,setText] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user,isSuccess,isError,message } = useSelector((state)=> state.user)

    const handleSubmit = (e)=>{
        e.preventDefault()
        const userData = {
            name: text.name,
            email: text.email,
            password: text.password
        }

        dispatch(register(userData))
    }

    const handleChange = (e)=>{
        setText((prevState)=>({
            ...prevState,
         [e.target.name] : e.target.value
        }))
    }

    useEffect(()=>{
        if(isError){
            toast.error(message)
        }

        if(user || isSuccess){
            navigate('/container/shop')
        }

        dispatch(reset())
    },[user,isError,isSuccess,navigate,dispatch,message])

  return (
    <div className='app'>
        <div className='login-form'>
        <div className="form">
    <form onSubmit={handleSubmit}>
    <div className="input-container">
        <label htmlFor='name'>Name </label>
        <input value={text.name} id='name' type="text" name="name" required onChange={handleChange} />
      </div>
      <div className="input-container">
        <label htmlFor='email'>Email </label>
        <input value={text.email} id='email' type="text" name="email" required onChange={handleChange} />
      </div>
      <div className="input-container">
        <label htmlFor='password'>Password </label>
        <input value={text.password} id='password' type="password" name="password" required onChange={handleChange} />
      </div>
      <div className="button-container">
        <input type="submit" />
      </div>
    </form>
  </div>
        </div>
    </div>
  )
}

export default Register