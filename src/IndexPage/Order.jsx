import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const OrderPage = () => {
    const location = useLocation();
    const order = location.state;
    const navigate = useNavigate();
    const handleOutOrder = () => {
        navigate('/HomePage');
    }
    if (!order) {
        return (
            <div className="min-h-screen bg-black text-white p-10 text-center">
                <h2 className="text-3xl font-bold mb-4">❌ Không tìm thấy đơn hàng</h2>
            </div>
        );
    }

    const { customer, items } = order;
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="min-h-screen bg-black text-white p-10">
            <h2 className="text-3xl font-bold mb-6 text-center">📦 Chi Tiết Đơn Hàng</h2>

            <div className="bg-gray-800 p-6 rounded-lg max-w-3xl mx-auto">
                <h3 className="text-xl font-bold mb-4">Thông tin khách hàng</h3>
                <p><strong>Họ tên:</strong> {customer.name}</p>
                <p><strong>Email:</strong> {customer.email}</p>
                <p><strong>Địa chỉ:</strong> {customer.address}</p>
                <p><strong>Thanh toán:</strong> {customer.paymentMethod === 'cod' ? 'Tiền mặt khi nhận hàng' : 'Chuyển khoản ngân hàng'}</p>

                <hr className="my-6 border-gray-600" />

                <h3 className="text-xl font-bold mb-4">Sản phẩm đã đặt:</h3>
                <ul className="space-y-4">
                    {items.map((item, idx) => (
                        <li key={idx} className="flex items-center justify-between border-b border-gray-600 pb-2">
                            <div className="flex items-center gap-4">
                                <img src={item.image} className="w-16 h-16 object-contain rounded" alt={item.name} />
                                <div>
                                    <p className="font-bold">{item.name}</p>
                                    <p className="text-sm text-gray-300">Số lượng: {item.quantity}</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-bold">{(item.price * item.quantity).toLocaleString()} Đ</p>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="text-right mt-6 text-xl font-bold">
                    Tổng cộng: <span className="text-red-500">{total.toLocaleString()} Đ</span>
                </div>
                <div className=' text-center mt-6 bg-red-500 font-bold py-2 px-4 rounded-2xl flex justify-center items-center'>
                    <div className=' w-40 h-auto'>
                        <button onClick={handleOutOrder}>Về trang chủ </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OrderPage;
