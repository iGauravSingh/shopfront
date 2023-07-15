import React from 'react'
import { BsStarFill,BsStar } from 'react-icons/bs'
import {useNavigate} from 'react-router-dom'
import './ProductItem.css'

const ProductItem = ({ name , image, rating,id }) => {
  
  const navigate = useNavigate()

  const handleClick=(id)=>{
    navigate(`/container/shop/${id}`)
  }

  const starGiver = (rate)=>{
    let star =[]
    for(let i = 1; i<= rate; i++){
      star.push(<BsStarFill key={i} />)
    }
    return star
  }

  return (
    <div className="card">
    <div className='container'>
      <img className='proImage' src={image} alt={name} />
      <button className="btn hide" onClick={()=>handleClick(id)}>Info</button>
    </div>
  
  <div>
    <h4><b>{name}</b></h4>
    <p>{starGiver(rating)}</p>
  </div>
</div>
  )
}

export default ProductItem