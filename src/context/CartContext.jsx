import {  createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (pizza) => {
        const existingPizza = cart.find((item) => item.id === pizza.id);
        if (existingPizza) {
            setCart(
                cart.map((item) =>
                item.id === pizza.id ? { ...item, count: item.count + 1} : item
            )
        );
        } else {
            setCart([...cart, { ...pizza, count: 1 }]);
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };


    const increaseQuantify = (id) => {
        setCart(
            cart.map((item) =>
            item.id === id ? { ...item, count: item.count + 1 } : item
        )
      );
    };


    const decreaseQuantify = (id) => {
        setCart(
            cart.map((item) =>
            item.id === id && item.count > 1 
            ? { ...item, count: item.count - 1 }
            : item
          )
      );
    };


    const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, increaseQuantify, decreaseQuantify, removeFromCart, total }}>
         {children}
        </CartContext.Provider>
    );

};

