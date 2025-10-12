import { Children, createContext, useContext, useEffect, useState } from "react";


const PizzaContext = createContext();

export const PizzaProvider = ({ children}) => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/pizzas")
        .then((res) => res.json())
        .then((data) => setPizzas(data));
    },[]);

    return (
        <PizzaContext.Provider value={{ pizzas}}>
            {children}
        </PizzaContext.Provider>
    );
};

export const usePizzas = () => useContext(PizzaContext);