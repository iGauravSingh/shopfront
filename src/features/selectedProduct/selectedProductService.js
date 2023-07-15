
import axios from 'axios'

const API_URL = 'http://localhost:4000/products/'





const getProductWithId = async(id)=>{
    const response = await axios.get(API_URL + `${id}`)

    return response.data

}

const selectedProductService = {
    getProductWithId
}
 export default selectedProductService

