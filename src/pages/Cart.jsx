import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Cart= () => {
    const { cart, increaseQuantify, decreaseQuantify, removeFromCart, total} = useCart();
    const { token } = useUser();
    const navigate = useNavigate();

    const handlePay = async () => {
        if (!token) {
            alert("iniciar sesión para continuar con el pago");
            navigate("/login");
            return;
        }

        try {
            const res = await fetch("http://localhost:5000/api/checkouts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ cart }),
            });

            if (!res.ok) throw new Error("Error al procesar el pago");

            alert("¡Gracias por tu compra!");
        } catch (error) {
            alert(error.message);
        }

       
    };



    return (

        <div className="container py-5">
            <h2 className="mb-4 text-center text-danger fw-bold ">🛒 Tu carrito</h2>
            {cart.length === 0 ? (
                <p className="text-center text-muted">No hay pizzas en el carrito.</p>
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

                        <div className="d-flex justify-content-center align-items-center gap-1">
                            <button className="btn btn-success btn-sm me-1 " onClick={() => increaseQuantify(item.id)}>+</button>
                            <button className="btn btn-warning btn-sm me-2" onClick={() => decreaseQuantify(item.id)}>-</button>
                            <button className="btn btn-danger btn-sm " onClick={() => removeFromCart(item.id)}>🗑️</button>
                        </div>
                    </div>
                ))}

                <div className="d-flex justify-content-end align-items-center p-3 mt-4 gap-5">
                <h4 className="fw-bold mb-0 ">Total: ${total.toLocaleString()}</h4>
                 
               
                   <button className={`btn ${token ? "btn-success" : "btn-secondary"} px-4 py-2 fw-bold `}
                   onClick={handlePay}>
                    {token ? "Pagar" : "Iniciar sesión para pagar"}
                   </button>
               
                 </div>
                
                </>
            )}

        </div>
    );



    
};

export default Cart; 


