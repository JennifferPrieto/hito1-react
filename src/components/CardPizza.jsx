import { FaShoppingCart, FaPizzaSlice } from "react-icons/fa";
import { Link } from "react-router-dom";

const CardPizza = ({ pizza, addToCart }) => {
  const {name, price, img, ingredients} = pizza;

    return (


        
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex" >
          <div className="card flex-fill  h-100 shadow-sm border-0 rounded-4 overflow-hidden">

            <img 
            src={img} 
            className="card-img-top" 
            alt={name} 
            style={{height: "200px", objectFit: "cover", width: "100%",}}
            />

          <div className="card-body d-flex flex-column justify-content-between">
           <div >
            <h5 className="card-title text-capitalize fw-bold mb-2 text-center">
             <FaPizzaSlice className="text-danger me-2" /> 
             {name}
             </h5>

             <ul className="list-unstyled small text-secondary mb-3">
              {ingredients.map((ing, index) => (
                <li key={index} className="d-flex align-items-center">
                  <span className="me-2">🍕</span> {ing}
                </li>
              ))}
            </ul>
          </div>


             <div className="mt-auto">
               <p className="fw-bold text-center fs-5 text-success mb-3">
                ${price.toLocaleString()}
                </p>

                <Link to={`/pizza/${pizza.id}`} 
                className="btn btn-outline-primary w-100 mb-2 fw-semibold"> 
                Ver más detalles </Link>

                 <button className="btn btn-success w-100 fw-semibold d-flex justify-content-center align-items-center gap-2" 
                 onClick={() => addToCart(pizza)}> 
                 <FaShoppingCart size={18} />
                Añadir al carrito:
              </button>
            </div>
         </div>
      </div>
    </div>
        

           

  );
};

export default CardPizza;




