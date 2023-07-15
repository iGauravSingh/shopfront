import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getProducts,reset } from '../features/product/productSlice'
import ProductItem from '../components/ProductItem'
import './Shop.css'
// import axios from 'axios'



const Shop = () => {
  const [list,setList] = useState(false)
  

  const dispatch= useDispatch()
  const { products,isSuccess,isError,message } = useSelector((state)=> state.product)
  //
//   const [po,setPo] = useState(false)
//   let data
//   const handleClick =async ()=>{
//     data = await axios.get('http://localhost:4000/products/')
//     setPo(!po)
//     console.log(data.data)
//   }
// useEffect(()=>{
//   console.log(po)
//   console.log(data)
// },[data])

  // const handleClick =async ()=>{
  //   dispatch(getProducts())
  //   console.log('clicked from shop')
  // }
 //

 const [category, setCategory] = useState(products)
 const [select,setSelect] = useState('all')

 useEffect(() => {
  if (isError) {
    console.log(message)
  }

  dispatch(getProducts())

  return () => {
    dispatch(reset())
  }
}, [isError, message, dispatch])

useEffect(()=>{
  setCategory(products)
},[products])

////////// search by category



const handleClick=(text)=>{
  setSelect(text)
  if(text === 'all'){
    setCategory(products)
    return
  }
  let heroCategory = products.filter(item => item.itemType === text)
  setCategory(heroCategory)
}

//////////


  return (
    <>
    <div>
      <div className='categoryContainer'>
        <button style={{backgroundColor: select === 'all' ? 'red' : 'whitesmoke'}} onClick={()=>handleClick('all')}>All</button>
        <button style={{backgroundColor: select === 'elec' ? 'red' : 'whitesmoke'}} onClick={()=>handleClick('elec')}>Electronics</button>
        <button style={{backgroundColor: select === 'cloth' ? 'red' : 'whitesmoke'}} onClick={()=>handleClick('cloth')}>Cloths</button>
        <button style={{backgroundColor: select === 'furniture' ? 'red' : 'whitesmoke'}} onClick={()=>handleClick('furniture')}>Furniture</button>
        <button style={{backgroundColor: select === 'other' ? 'red' : 'whitesmoke'}} onClick={()=>handleClick('other')}>Others</button>
      </div>
    </div>
    <div className='cardcontainer'>
    {category.map(pro=> (
      <ProductItem key={pro._id} name={pro.name} rating={pro.rating} image={pro.image} id={pro._id} />
    )
    )}
    </div>
    </>
  )
}

export default Shop