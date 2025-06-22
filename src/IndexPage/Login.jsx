import '../index.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const Navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === '123456') {
            Navigate('/HomePage')
        } else {
            alert('Đăng nhập thất bại')
        }
    }
    return (
        <>
            <div className=' w-full h-screen flex items-center justify-center bg-gradient-to-l from-blue-400 to-purple-500'>
                <div className=' w-96 h-auto p-5 bg-white rounded-xl space-y-5'>
                    <div className=' text-center'>
                        <h1 className=' text-2xl font-bold'>Đăng nhập</h1>
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Tên đăng nhập</label>
                        <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Nhập tên đăng nhập" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Mật khẩu</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Nhập mật khẩu" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <button type="submit" onClick={handLogin} className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"> Đăng nhập</button>
                    <div className=' text-center'>
                        <p>Chưa có tài khoản? <a href='#' className=' text-blue-500'>Đăng kí</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;