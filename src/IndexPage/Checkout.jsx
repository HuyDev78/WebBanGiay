import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const { cartItems, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        email: '',
        address: '',
        paymentMethod: 'cod',
    });

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.address) {
            alert('Vui lòng điền đầy đủ thông tin!');
            return;
        }

        const order = {
            customer: form,
            items: cartItems,
        };

        clearCart();
        navigate('/order', { state: order });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold text-center mb-8">💳 Thanh Toán</h1>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

                <div className="space-y-4 bg-gray-800 p-6 rounded-xl shadow-xl">
                    <h2 className="text-xl font-bold mb-4">Thông tin khách hàng</h2>

                    <input
                        type="text"
                        name="name"
                        placeholder="Họ và tên"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
                    />
                    <textarea
                        name="address"
                        placeholder="Địa chỉ nhận hàng"
                        value={form.address}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 resize-none h-24"
                    ></textarea>

                    <div>
                        <label className="block mb-2 font-semibold">Phương thức thanh toán</label>
                        <select
                            name="paymentMethod"
                            value={form.paymentMethod}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-gray-700 text-white"
                        >
                            <option value="cod">Tiền mặt khi nhận hàng</option>
                            <option value="bank">Chuyển khoản ngân hàng</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-4 bg-gray-800 p-6 rounded-xl shadow-xl">
                    <h2 className="text-xl font-bold mb-4">🛒 Đơn hàng của bạn</h2>
                    {cartItems.length === 0 ? (
                        <p className="text-gray-400">Không có sản phẩm nào trong giỏ hàng.</p>
                    ) : (
                        <ul className="divide-y divide-gray-600">
                            {cartItems.map((item, idx) => (
                                <li key={idx} className="py-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <img src={item.image} alt={item.name} className="w-12 h-12 object-contain rounded" />
                                        <div>
                                            <p className="font-bold">{item.name}</p>
                                            <p className="text-sm text-gray-400">x{item.quantity}</p>
                                        </div>
                                    </div>
                                    <p className="font-bold text-red-400">{(item.price * item.quantity).toLocaleString()} Đ</p>
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="text-right text-xl font-bold mt-6">
                        Tổng cộng: <span className="text-red-500">{total.toLocaleString()} Đ</span>
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition duration-300"
                    >
                        Xác nhận thanh toán
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutPage;
