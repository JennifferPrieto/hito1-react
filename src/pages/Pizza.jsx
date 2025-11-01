import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Pizza = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState(null);

    useEffect(() => {
        const fetchPizza = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
                const data = await response.json();
                setPizza(data);
            } catch (error) {
                console.error("Error al obtener la pizza:", error);

            }
        };

        fetchPizza();
    }, [id]);

    if (!pizza) {
        return <p className="text-center mt-5">Cargando pizza...</p>;
    }

    return (
        <div className="container my-5">
           <div className="card shadow-lg">
            <div className="row g-0">
                {/* Imagen */}
                <div className="col-md-5">
                    <img src={pizza.img} alt={pizza.name} className="img-fluid rounded-start" />

                </div>

                {/* Info */}
                <div className="col-md-7 d-flex flex-column justify-content-between p-4">
                    <div>
                        <h2 className="fw-bold">{pizza.name}</h2>
                        <p className="text-muted">{pizza.desc}</p>
                        <h5 className="mt-5">Ingredientes:</h5>
                        <ul>
                            {pizza.ingredients.map((ing, i) => (
                                <li key={i}>{ing}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-4 gap-4">
                        <h4 className="text-success fw-bold">${pizza.price}</h4>
                        <button className="btn btn-danger">Añadir al carrito 🛒 </button>

                    </div>

                </div>

            </div>

           </div>
        </div>
    );
};

export default Pizza;