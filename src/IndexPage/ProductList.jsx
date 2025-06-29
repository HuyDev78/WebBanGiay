import Product from './Product';
import Giay1 from '../assets/Giay2.png';

const ProductList = () => {
    const products = [
        { id: 1, Url: Giay1, Name: 'Nike Jordan 1', Old: '450.000', New: '399.000' },
        { id: 2, Url: Giay1, Name: 'Nike Jordan 2', Old: '500.000', New: '350.000' },
        { id: 3, Url: Giay1, Name: 'Nike Jordan 3', Old: '700.000', New: '599.000' },
        { id: 4, Url: Giay1, Name: 'Nike Jordan 4', Old: '550.000', New: '499.000' },
    ];

    return (
        <div className="w-full h-auto mx-auto mt-20">
            <div className="grid grid-cols-4 gap-8 max-w-[80%] mx-auto text-center">
                {products.map((item) => (
                    <Product
                        key={item.id}
                        Url={item.Url}
                        Name={item.Name}
                        Old={item.Old}
                        New={item.New}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
