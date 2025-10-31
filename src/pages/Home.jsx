import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import CardPizza from "../components/CardPizza.jsx";
import Header from "../components/Header.jsx";


const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useCart(); 

   useEffect(() => {
      const fetchPizzas = async () => {
         try {
            const res = await fetch("http://localhost:5000/api/pizzas");
            const data = await res.json();
            setPizzas(data);
         } catch (error) {
            console.error("error al cargar las pizzas:", error);
         }
      };


      fetchPizzas();
            
      }, []);

           
   
    return (

      <div>
         <Header/>
      

      <div className="container-fluid py-4">
         <h2 className=" mb-4 text-center"> Our restaurant's menu</h2>
         <div className="row row-cold-1 row-cols-sm-2 row-cols-lg-3 g-4">
            {pizzas.length > 0 ? (
               pizzas.map((pizza) => (
                  <div className="col" key={pizza.id}>
                     <CardPizza pizza={pizza} addToCart={addToCart} />
                  </div>
               ))
            ) : (
               <p className="text-center">Cargando pizzas...</p>
            )}

         </div>
      </div> 
      </div>
    );
   };

   export default Home; 
         

        

   
