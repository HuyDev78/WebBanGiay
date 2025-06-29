import '../index.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));

        if (!user) {
            alert('Không tìm thấy tài khoản, vui lòng đăng ký trước!');
            return;
        }

        if (email === user.email && password === user.password) {
            alert('Đăng nhập thành công!');
            navigate('/HomePage');
        } else {
            alert('Email hoặc mật khẩu không đúng!');
        }
    };

    return (
        <div className='w-full h-screen flex items-center justify-center bg-gradient-to-l from-blue-400 to-purple-500'>
            <div className='w-96 h-auto p-5 bg-white rounded-xl space-y-5 shadow-lg'>
                <div className='text-center'>
                    <h1 className='text-2xl font-bold'>Đăng nhập</h1>
                </div>
                <form onSubmit={handleLogin} className='space-y-4'>
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Nhập email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Mật khẩu</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Nhập mật khẩu"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
                    >
                        Đăng nhập
                    </button>
                </form>
                <div className='text-center'>
                    <p>Chưa có tài khoản? <a href="/register" className='text-blue-500'>Đăng ký</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
