import React from "react";

const CardPizza = ({ pizza, addToCart }) => {
  const {name, price, img, ingredients} = pizza;

    return (


        
        <div className="col-md-4 mb-3" >
          <div className="card  h-100 shadow-sm">

            <img src={img} className="card-img-top" alt={name} />

            
           <div className="card-body">
            
              <h5 className="card-title mb-2 ">{name}</h5>
              <p className="card-text">${price.toLocaleString()}</p>
              <h6 className="text-muted mb-2">Ingredients:</h6>
              <ul>
                {ingredients?.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
              <button className="btn btn-success w-100" onClick={() => addToCart(pizza)}> 
                Añadir al carrito:
              </button>
              
            </div>
             
          </div>
        </div>

           

    );
};

export default CardPizza;




