import Header from './IndexPage/header'
import Button from './IndexPage/button'
import Tittle from './IndexPage/tittle'
import Product from './IndexPage/product'
import Giay1 from './assets/Giay2.png'
import New from './IndexPage/new'
import System from './IndexPage/system'
import Footer from './IndexPage/footer'
import { Routes, Route } from 'react-router-dom';
import Login from './IndexPage/Login'
import '././index.css'
import CartPage from './IndexPage/CartPage'
import BuyNow from './IndexPage/BuyNow'
import CheckoutPage from './IndexPage/Checkout'
import OrderPage from './IndexPage/Order'
import Register from './IndexPage/Register'

function HomePage() {


  return (
    <>
      <div className=' bg-black'>
        <Header />
        <div className=' w-full h-50 p-7'>
          <div className=' flex flex-row items-center justify-center'>
            <Button tittle={'Giày Nam'} />
            <Button tittle={'Giày Nữ'} />
            <Button tittle={'Giày Đôi'} />
          </div>
        </div>
        <Tittle />
        <div className=' w-full h-auto mx-auto mt-20'>
          <div className=' grid grid-cols-4 gap-8 max-w-[80%] mx-auto text-center'>
            <Product Url={Giay1} Name={'Nike Jordan 1'} Old={'450.000'} New={'399.000'} />
            <Product Url={Giay1} Name={'Nike Jordan 2'} Old={'500.000'} New={'350.000'} />
            <Product Url={Giay1} Name={'Nike Jordan 3'} Old={'700.000'} New={'599.000'} />
            <Product Url={Giay1} Name={'Nike Jordan 4'} Old={'550.000'} New={'499.000'} />
          </div>
        </div>
        <New />
        <System />
        <Footer />

      </div>


    </>
  )
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/buynow" element={<BuyNow />} />
      <Route path="/register" element={<Register />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/order" element={<OrderPage />} />
    </Routes>
  );
}

export default App
