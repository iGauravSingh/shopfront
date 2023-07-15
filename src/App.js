import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Container from './pages/Container';
import Landing from "./pages/Landing";
import About from "./pages/About";
import Shop from "./pages/Shop";
import ProductDetail from './pages/ProductDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Cart from './components/Cart';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='container' element={<Container />}>
          <Route path='about' element={<About />} />
          <Route path ='shop' element={<Shop />} />
          <Route path='shop/:id' element={<ProductDetail />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
