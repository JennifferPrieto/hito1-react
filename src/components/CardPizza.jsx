import { Link } from "react-router-dom";

const CardPizza = ({ pizza, addToCart }) => {
  const {name, price, img, ingredients} = pizza;

    return (


        
        <div className="col-md-4 mb-3" >
          <div className="card  h-100 shadow-sm">

            <img src={img} className="card-img-top" alt={name} />

            
           <div className="card-body">
            
              <h5 className="card-title mb-2 ">{name}</h5>
              <p className="card-text">${price.toLocaleString()}</p>
              
              <Link to={`/pizza/${pizza.id}`} className="btn btn-primary w-100 mb-2"> Ver más detalles </Link>
              
              <button className="btn btn-success w-100" onClick={() => addToCart(pizza)}> 
                Añadir al carrito:
              </button>
              
            </div>
             
          </div>
        </div>

           

    );
};

export default CardPizza;




