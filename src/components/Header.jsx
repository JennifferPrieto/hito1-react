
import React from "react";
import pizzaHeader from "../assets/img/pizzaHeader.jpg";

const Header = () => {
    return (
        <header
        className="d-flex flex-column justify-content-center align-items-center text-white text-center"
        style={{

        
        backgroundImage: `url(${pizzaHeader})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
        textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
        
        filter: 'brightness(0.7)' 
      
    
    }}

    >

        
            <h1 className="fw-bold fs-1">Pizzería Mamma Mía!</h1>
            <p className="fs-5">¡Tenemos las mejores pizzas que podrás encontrar!</p>
            <hr className="border-2" style={{ width: "60%", borderColor: "white" }} />
        </header>

    );
};

export default Header;

