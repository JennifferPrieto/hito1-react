import React, { useState} from "react";
import { pizzaCart } from "../data/pizzas";

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);

    const increase = (id) => {
        setCart(
            cart.map((p) =>
            p.id === id ? { ...p, count: p.count + 1} : p
        )
        );
    };
    const decrease = (id) => {
        setCart(
            cart
            .map((p) =>
            p.id === id ? { ...p, count: p.count - 1} : p
        )
        .filter((p) => p.count > 0)
        );
    };

    const total = cart.reduce((sum, p) => sum + p.price * p.count, 0);

    return (
        <div className=" container-fluid d-flex justify-content-center align-items-center  bg-light min-vh-100">
            <div className="w-100" style={{maxWidth: "800px"}}>
            <h2 className="text-center mb-4">Shopping Cart</h2>
            {cart.map((pizza)=>(
                <div 
                key={pizza.id} 
                className="d-flex align-items-center justify-content-between mb-3 p-4 bg-white rounded shadow-sm">
                <img src={pizza.img} alt={pizza.name} width="80" className="me-3 rounded"/>
                    <div className="flex-grow-1">
                        <h5 className="mb-1">{pizza.name}</h5>
                        <p className="mb-0 text-muted">${pizza.price}</p>
                    </div>
                    
                    <div className="d-flex align-items-center">
                        <button className="btn btn-sm btn-outline-danger me-2" onClick={() => decrease(pizza.id)}>-</button>
                        <span className="mx-2 fw-bold">{pizza.count}</span>
                        <button className="btn btn-sm btn-outline-success " onClick={() => increase(pizza.id)}>+</button>


                    </div>
                </div>
            ))}

            <div className="text-start mt-4">
                <h4>Total: ${total} </h4>
            <button className="btn btn-primary w-100">Payment</button> 
            </div>

        </div>
    </div>
    );


    
};



export default Cart;