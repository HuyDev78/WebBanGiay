import '../index.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmError, setConfirmError] = useState('');

    // Regex
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePassword = (password) =>
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset lỗi
        setEmailError('');
        setPasswordError('');
        setConfirmError('');

        let valid = true;

        if (!validateEmail(email)) {
            setEmailError('Email không hợp lệ');
            valid = false;
        }

        if (!validatePassword(password)) {
            setPasswordError('Mật khẩu phải từ 6 ký tự, có chữ, số và ký tự đặc biệt');
            valid = false;
        }

        if (password !== confirmPassword) {
            setConfirmError('Mật khẩu nhập lại không khớp');
            valid = false;
        }

        if (!valid) return;

        // Lưu vào localStorage
        localStorage.setItem('user', JSON.stringify({ email, password }));
        alert('Đăng ký thành công!');
        navigate('/');
    };

    return (
        <div className='w-full h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500'>
            <div className='w-96 p-6 bg-white rounded-xl shadow-md space-y-5'>
                <h1 className='text-2xl font-bold text-center'>Đăng ký</h1>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={() => {
                                if (!validateEmail(email)) setEmailError('Email không hợp lệ');
                                else setEmailError('');
                            }}
                            placeholder="Nhập email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                    </div>

                    {/* Mật khẩu */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Mật khẩu</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={() => {
                                if (!validatePassword(password))
                                    setPasswordError('Mật khẩu phải từ 6 ký tự, có chữ, số và ký tự đặc biệt');
                                else setPasswordError('');
                            }}
                            placeholder="Tạo mật khẩu"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                    </div>

                    {/* Nhập lại mật khẩu */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Nhập lại mật khẩu</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onBlur={() => {
                                if (password !== confirmPassword)
                                    setConfirmError('Mật khẩu nhập lại không khớp');
                                else setConfirmError('');
                            }}
                            placeholder="Nhập lại mật khẩu"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        {confirmError && <p className="text-red-500 text-sm mt-1">{confirmError}</p>}
                    </div>

                    {/* Nút đăng ký */}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-200"
                    >
                        Đăng ký
                    </button>
                </form>
                <div className='text-center'>
                    <p>Đã có tài khoản? <a href="/" className='text-blue-500'>Đăng nhập</a></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
