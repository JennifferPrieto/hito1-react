import React from "react";

const CardPizza = ({ name, price, ingredients, img}) => {
    return (

        
        <div className="card h-100 shadow-sm border-1 rounded-2 " >

            <img 
            src={img} 
            className="card-img-top" 
            alt={name}
            
            />

            
           <div className="card-body text-start ">
            <div className="border-1">
              <h5 className="card-title ">{name}</h5>
              <hr  className=""/>
            </div>
             
           </div>

            <div className="card-body text-center ">
              
                 <p className="card-text text-muted ">
                Ingredientes: <br /> 🍕 {ingredients.join(", ")}
                </p>
             
             

             <hr className="w-100" />

             <p className="card-text fs-4 fw-bold text-dark">
              Precio: ${price.toLocaleString()}

             </p>
            </div>

            <div className="d-flex justify-content-center text-center p-3 gap-5">
              <div>
                 <button className="btn btn-outline-dark"> Ver más </button>
              </div>
              <div>
                 <button className="btn btn-dark"> Añadir  🛒 </button>
              </div>
            
            </div>
 
             
           

            
          
        </div>

    );
};

export default CardPizza;




