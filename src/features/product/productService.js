import axios from 'axios'

const API_URL = 'https://shopback-coyg.onrender.com/products/'

const getAllProduct = async ()=>{
    const response = await axios.get(API_URL)

    return response.data
}




const productService = {
    getAllProduct
}

export default productService




