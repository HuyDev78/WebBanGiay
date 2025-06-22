import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import logo from '../assets/logo.jpg';
import banner from '../assets/banner.webp';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const { cartItems } = useContext(CartContext);
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const navigate = useNavigate();
    const handleCart = () => {
        navigate('/cart')
    }

    return (
        <>
            <div className='w-full h-[100px] border border-black p-5 flex items-center justify-between bg-black'>
                <img className='w-[150px] h-auto' src={logo} alt='logo' />

                <ul className='flex text-2xl font-bold text-white ml-10'>
                    <li className='ml-10 hover:text-red-500'>NIKE</li>
                    <li className='ml-10 hover:text-red-500'>ADIDAS</li>
                    <li className='ml-10 hover:text-red-500'>HÃNG KHÁC</li>
                    <li className='ml-10 hover:text-red-500'>THANH LÍ</li>
                </ul>

                <div className='flex items-center'>
                    <input type='text' placeholder='Tìm kiếm sản phẩm' className='text-white border border-white py-2 px-4 rounded-2xl' />
                    <button className='text-xl text-white p-[5px] ml-5 bg-blue-500 rounded-2xl' >Search</button>


                    <div className="relative ml-6 cursor-pointer" onClick={handleCart}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2}
                            viewBox="0 0 24 24">
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8H19m-4-8v8" />
                        </svg>
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                            {totalItems}
                        </span>
                    </div>
                </div>
            </div>

            <img src={banner} alt='banner' />
        </>
    );
};

export default Header;
