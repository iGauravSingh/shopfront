import axios from 'axios'

const URI = 'http://localhost:4000/user/'

//register user

const register =async (userData)=>{
    const response = await axios.post(URI + 'register',userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}


// login user

const login = async (userData)=>{
    const response = await axios.post(URI+ 'login',userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }

    return response.data
}

// logout user

const logout = ()=>{
    localStorage.removeItem('user')
}


// add item to user cart

const addItem = async (item,token)=>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    const response =await axios.post(URI + 'additem',item,config)
    return response.data
}

// remove item from user cart
const removeItem = async (id,token)=>{
    console.log('from remove authservice')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    const response =await axios.post(URI + 'removeitem',id,config)
    return response.data
}

const authService = {register,login,logout,addItem,removeItem}
export default authService






