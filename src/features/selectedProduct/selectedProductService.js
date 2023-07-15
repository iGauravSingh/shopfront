
import axios from 'axios'

const API_URL = 'https://shopback-coyg.onrender.com/products/'





const getProductWithId = async(id)=>{
    const response = await axios.get(API_URL + `${id}`)

    return response.data

}

const selectedProductService = {
    getProductWithId
}
 export default selectedProductService

