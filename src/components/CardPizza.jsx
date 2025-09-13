import React from "react";

const CardPizza = ({ name, price, ingredients, img}) => {
    return (

        
        <div className="card h-100 shadow-sm border-1 rounded-2 " >

            <img src={img} className="card-img-top" alt={name} />

            
           <div className="card-body  ">
            
              <h5 className="card-title ">{name}</h5>
              <p><strong>Price: ${price}</strong></p>
              <h6>Ingredients:</h6>
              <ul>
                {ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
              <button className="btn btn-success w-100">add to Cart:</button>
              
            </div>
             
           </div>

           

    );
};

export default CardPizza;




