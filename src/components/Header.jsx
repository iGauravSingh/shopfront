import { ImCart,ImHome,ImProfile,ImUser,ImPriceTags } from "react-icons/im";
import { Link } from "react-router-dom"
import './Header.css'
const Header = () => {
  return (
    <>
        <nav>
        <h2>Shop</h2>
            <ul>
                <li><Link to='/'><ImHome /></Link></li>
                <li><Link to='/container/about'><ImProfile /></Link></li>
                <li><Link to='/container/shop'><ImPriceTags /></Link></li>
                <li><Link to='/container/cart'><ImCart /></Link></li>
                <li><Link to='/container/dashboard'><ImUser /></Link></li>
            </ul>
            
            
        </nav>
    </>

  )
}

export default Header