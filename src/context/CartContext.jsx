import {  createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);



export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);



    const addToCart = (pizza) => {
        setCart((prevCart) => {
            const existing = prevCart.find((item) => item.id === pizza.id);
            if (existing) {
                return prevCart.map((item) =>
                item.id === pizza.id ? { ...item,count: item.count + 1 } : item
            );
            }
            return [...prevCart, { ...pizza, count: 1 }];
        });

    };

       const increaseQuantify = (id) => {
        setCart((prevCart) =>
        prevCart.map((item) =>
            item.id === id ? { ...item, count: item.count + 1 } : item
          )
          
      );
    }; 
    
    const decreaseQuantify = (id) => {
        setCart((prevCart) =>
        prevCart
        .map((item) =>
            item.id === id ? { ...item, count: item.count - 1 } : item
          )
          .filter((item) => item.count > 0)
          
      );
    }; 

    
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    

    return (
        <CartContext.Provider 
        value={{ cart, addToCart, increaseQuantify, decreaseQuantify, removeFromCart, total }}>
         {children}
        </CartContext.Provider>
    );

};



