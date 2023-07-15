import { useNavigate } from "react-router-dom"
import './Landing.css'

const Landing = () => {

  const navigate = useNavigate()

  const handleClick = ()=>{
    navigate('/container/shop')
  }
  return (
    <>
      
      <div className="herocontainer">
        
        <img src='https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='heroimage' />
        <button className="btnhe" onClick={handleClick}>Shop Now</button>
        
      </div>
      
    </>
  )
}

export default Landing