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
        <div className="container-fluid d-flex justify-content-center align-items-center flex-grow-1 bg-light">
            <div className="card shadow p-4 w-100">
            <h2 className="text-center mb-4">Shopping Cart</h2>
            {cart.map((pizza)=>(
                <div key={pizza.id} className="d-flex align-items-center mb-3 border  p-2 rounded">
                    <img src={pizza.img} alt={pizza.name} width="80" className="me-3"/>
                    <div className="flex-grow-1">
                        <h5>{pizza.name}</h5>
                        <p>${pizza.price} x {pizza.count}</p>
                    </div>
                    <div>
                        <button className="btn btn-sm btn-success me-2" onClick={() => increase(pizza.id)}>+</button>
                        <button className="btn btn-sm btn-danger " onClick={() => decrease(pizza.id)}>-</button>


                    </div>
                </div>
            ))}

            <h4>Total: ${total} </h4>
            <button className="btn btn-primary w-100">Pagar</button>
        </div>
    </div>
    );


    
};



export default Cart;