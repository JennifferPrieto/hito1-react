
import React from "react";
import pizzaHeader from "../assets/img/pizzaHeader.jpg";
import "../assets/css/style.css"


const Header = () => {
    return (
        <header
        className="pizzaHeader"
        style={{backgroundImage: `url(${pizzaHeader})`}}
        aria-label="pizzaHeader"
         
      
    
    

    >

        <div className="pizzaHeader__center ">
            <div className="pizzaHeader__card text-center">
                 <h1 className="fw-bold fs-1 text-white">Pizzería Mamma Mía!</h1>
                 <p className="fs-5 text-white ">¡Tenemos las mejores pizzas que podrás encontrar!</p>
                 
            </div>

        </div>

        <div className="pizzaHeader__fade"/>
            
        </header>

    );
};

export default Header;

