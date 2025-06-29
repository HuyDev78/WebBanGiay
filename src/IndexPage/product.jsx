import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Product = ({ Url, Name, Old, New }) => {
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    const id = Name + New;

    const handleAddToCart = () => {
        addToCart({
            id,
            name: Name,
            price: parseFloat(New.replace('.', '').replace('Đ', '')),
            image: Url
        });
        alert("🛒 Sản phẩm đã được thêm vào giỏ hàng!");
    };

    const handleViewDetail = () => {
        navigate(`/product/${id}`, {
            state: {
                id,
                name: Name,
                price: New,
                oldPrice: Old,
                image: Url,
            }
        });
    };

    return (
        <div className='group w-70 h-auto border border-white text-center p-3'>
            <div className="transition-transform duration-1000 group-hover:-translate-y-[90px] group-hover:-rotate-[20deg]">
                <img src={Url} alt={Name} className="w-full h-auto object-contain" />
            </div>
            <h1 className='text-2xl text-white font-bold mt-4 transition-transform duration-700 group-hover:translate-x-[-50px] group-hover:translate-y-[-90px]'>{Name}</h1>
            <div className='flex justify-center mt-4'>
                <p className='text-white line-through group-hover:hidden'>{Old} Đ</p>
                <h3 className='text-xl text-red-500 ml-2 font-bold mt-2 transition-transform duration-700 group-hover:translate-x-[-60px] group-hover:translate-y-[-90px] group-hover:mt-0 group-hover:ml-0'>{New} Đ</h3>
            </div>

            <div className="hidden group-hover:flex opacity-0 group-hover:opacity-100 text-white mt-4 transition-transform duration-1000 flex-row justify-center items-center group-hover:translate-y-[-50px]">
                <h3 className="text-2xl font-bold mr-2 text-red-500">Size :</h3>
                {[41, 42, 43, 44].map(size => (
                    <span key={size} className="text-[15px] font-bold border border-white p-1 bg-white text-black rounded-full ml-2">{size}</span>
                ))}
            </div>

            <div className='hidden group-hover:flex opacity-0 group-hover:opacity-100 text-white mt-4 transition-transform duration-1000 flex-row justify-center items-center group-hover:translate-y-[-50px]'>
                <button onClick={handleViewDetail} className='px-2 py-1 border border-white rounded-xl text-black bg-green-400 mr-3 font-bold'>Xem chi tiêt</button>
                <button onClick={handleAddToCart} className='px-2 py-1 border border-white rounded-xl text-black bg-green-400 ml-3 font-bold'>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;