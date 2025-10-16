import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Cart= () => {
    const { cart, increaseQuantify, decreaseQuantify, removeFromCart, total} = useCart();
    const { token } = useUser();



    return (

        <div className="container mt-4">
            <h2>🛒 Tu carrito</h2>
            {cart.length === 0 ? (
                <p>No hay pizzas en el carrito.</p>
            ) : (
                <>
                {cart.map((item) => (
                    <div key={item.id} className="d-flex justify-content-between align-items-center border p-2 mb-2">
                        <img src={item.img} alt={item.name} style={{ width:"70px", height:"70px", objectFit:"cover", 
                            borderRadius:"8px", marginRight:"10px",
                        }}/>

                        <div className="flex-grow-1">
                            <h5 className="mb-1">{item.name}</h5>
                            <p className="mb-0">${item.price.toLocaleString()} x {item.count}</p>
                        </div>

                        <div>
                            <button className="btn btn-success btn-sm me-2" onClick={() => increaseQuantify(item.id)}>+</button>
                            <button className="btn btn-warning btn-sm me-4" onClick={() => decreaseQuantify(item.id)}>-</button>
                            <button className="btn btn-danger btn-sm " onClick={() => removeFromCart(item.id)}>🗑️</button>
                        </div>
                    </div>
                ))}
                <div className="text-end mt-3 fs-3 fw-bold ">Total: ${total.toLocaleString()}</div>

                <button className="btn btn-primary mt-3" disabled={!token}> Pagar </button>
                </>
            )}

        </div>
    );



    
};

export default Cart; 


