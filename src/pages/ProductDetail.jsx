import React,{ useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { getProductsWithId,reset } from '../features/selectedProduct/selectedProductSlice'
import './ProductDetail.css'
import QuantityAdder from '../components/QuantityAdder'

const ProductDetail = () => {
    const dispatch = useDispatch()
    const {selectedProduct,isError,message} = useSelector((state)=> state.selectedProduct)

    let item = useParams()
    
    useEffect(() => {
        if (isError) {
          console.log(message)
        }
      
        dispatch(getProductsWithId(item.id))
      
        return () => {
          dispatch(reset())
        }
      }, [isError, message, dispatch,item.id])

      

  return (
    <>
        <div className='itemHead'>
            <h3>{selectedProduct.name}</h3>
        </div>
        <div className='itemDetail'>
            <div>
                <img src={selectedProduct.image} alt='item' />
            </div>
            <div>
                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
            </div>
        </div>
        <QuantityAdder id={selectedProduct._id} image={selectedProduct.image} name={selectedProduct.name} />
    </>
  )
}

export default ProductDetail