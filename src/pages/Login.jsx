import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {login,reset} from '../features/auth/authSlice'
import { toast } from 'react-toastify'

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user,isError,isSuccess,message } = useSelector((state)=> state.user)

    const [text,setText] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e)=>{
        setText((prevstate)=> ({
            ...prevstate,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        const userdata = {
            email: text.email,
            password: text.password
        }
        dispatch(login(userdata))
    }



    useEffect(()=>{
        if(isError){
            toast.error(message)
        }

        if(user || isSuccess){
            navigate('/container/shop')
        }

        dispatch(reset())
    },[user,isError,isSuccess,navigate,message,dispatch])


    return (
        <div className='app'>
            <div className='login-form'>
            <div className="form">
        <form onSubmit={handleSubmit}>
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
        <p>new here ? <Link to='/container/register'>register</Link></p>
      </div>
            </div>
        </div>
      )
}

export default Login