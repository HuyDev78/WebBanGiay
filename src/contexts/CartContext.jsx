import { createContext, useState } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existing = prevItems.find(item => item.name === product.name);
            if (existing) {
                return prevItems.map(item =>
                    item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };
    const clearCart = () => {
        setCartItems([]);
    };
    return (
        <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
