import '../index.css'

const Button = ({ tittle }) => {
    return (
        <>
            <div className=' w-64 h-38 border-gray-500 flex flex-col items-center justify-center hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-shadow duration-300 ml-5'>
                <h1 className=' text-2xl text-white font-bold my-5 '>{tittle}</h1>
                <button className=' text-xl text-white border border-white p-2 hover:text-red-500 hover:border-red-500'>Xem Mẫu</button>
            </div>
        </>
    );
}

export default Button;