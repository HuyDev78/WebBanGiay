import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const { cartItems, increaseQuantity, decreaseQuantity, removeItem } = useContext(CartContext);
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout');
    };
    return (
        <div className="min-h-screen bg-black text-white p-10">
            <h1 className="text-3xl font-bold mb-6 text-center">🛒 Giỏ Hàng Của Bạn</h1>

            {cartItems.length === 0 ? (
                <p className="text-center text-xl text-gray-400">Không có sản phẩm nào trong giỏ hàng.</p>
            ) : (
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr className="text-left border-b border-gray-700">
                            <th className="py-2">Sản phẩm</th>
                            <th className="py-2">Giá</th>
                            <th className="py-2">Số lượng</th>
                            <th className="py-2">Tạm tính</th>
                            <th className="py-2">Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item, idx) => (
                            <tr key={idx} className="border-b border-gray-700">
                                <td className="py-3 flex items-center gap-4">
                                    <img src={item.image} className="w-16 h-16 object-contain" alt={item.name} />
                                    <span>{item.name}</span>
                                </td>
                                <td>{item.price.toLocaleString()} Đ</td>
                                <td>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => decreaseQuantity(item.id)}
                                            className="bg-gray-700 px-2 rounded hover:bg-gray-600"
                                        >-</button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() => increaseQuantity(item.id)}
                                            className="bg-gray-700 px-2 rounded hover:bg-gray-600"
                                        >+</button>
                                    </div>
                                </td>
                                <td>{(item.price * item.quantity).toLocaleString()} Đ</td>
                                <td>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-red-500 hover:underline"
                                    >Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {cartItems.length > 0 && (
                <>
                    <div className="text-right mt-6 text-xl font-bold">
                        Tổng cộng: <span className="text-red-500">{total.toLocaleString()} Đ</span>
                    </div>
                    <div className="text-right mt-6">
                        <button
                            onClick={handleCheckout}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
                        >
                            Thanh toán
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
