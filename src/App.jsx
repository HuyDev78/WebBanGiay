import Header from './IndexPage/header'
import Button from './IndexPage/button'
import Tittle from './IndexPage/tittle'
import ProductList from './IndexPage/ProductList'
import New from './IndexPage/new'
import System from './IndexPage/system'
import Footer from './IndexPage/footer'
import { Routes, Route } from 'react-router-dom';
import Login from './IndexPage/Login'
import '././index.css'
import CartPage from './IndexPage/CartPage'
import BuyNow from './IndexPage/ProductDetail'
import CheckoutPage from './IndexPage/Checkout'
import OrderPage from './IndexPage/Order'
import Register from './IndexPage/Register'
import ProductDetail from './IndexPage/ProductDetail'

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
        <ProductList />
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
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App
