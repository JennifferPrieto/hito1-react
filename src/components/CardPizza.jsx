import React from "react";

const CardPizza = ({ name, price, ingredients, img}) => {
    return (


        
        <div className="col " >
          <div className="card  h-100 shadow-sm">

            <img src={img} className="card-img-top" alt={`Pizza ${name}`} />

            
           <div className="card-body">
            
              <h5 className="card-title mb-2 ">{name}</h5>
              <p><strong>Price: ${price}</strong></p>
              <h6 className="text-muted mb-2">Ingredients:</h6>
              <ul>
                {ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
              <button className="btn btn-success w-100">add to Cart:</button>
              
            </div>
             
             </div>
           </div>

           

    );
};

export default CardPizza;




