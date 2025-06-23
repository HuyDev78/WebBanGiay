import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existing = prevItems.find(item => item.id === product.id);
            if (existing) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const increaseQuantity = (productId) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeItem = (productId) => {
        setCartItems(prevItems =>
            prevItems.filter(item => item.id !== productId)
        );
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                clearCart,
                increaseQuantity,
                decreaseQuantity,
                removeItem
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
