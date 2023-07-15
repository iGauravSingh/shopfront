import axios from 'axios'

const API_URL = 'http://localhost:4000/products/'

const getAllProduct = async ()=>{
    const response = await axios.get(API_URL)

    return response.data
}




const productService = {
    getAllProduct
}

export default productService




