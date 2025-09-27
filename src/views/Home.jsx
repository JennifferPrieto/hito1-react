import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import CardPizza from "../components/CardPizza.jsx";


const Home = () => {
   const [pizzas, setPizzas] = useState([]);

   useEffect(() => {
      const fetchPizzas = async () => {
         try {
            const response = await fetch("http://localhost:5000/api/pizzas");
            const data = await response.json();
            setPizzas(data);
         } catch (error) {
            console.error("Error al cargar las pizzas:", error);
         }
      };

      fetchPizzas();
   }, []);
   
    return (
      <>
      <Header />

      <div className="container-fluid py-4">
         <h2 className=" mb-4"> Our restaurant's menu</h2>
         <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            {pizzas.map ((pizza) => (
              <div className="col" key={pizza.id}>
               <CardPizza
               key={pizza.id}
               name={pizza.name}
               price={pizza.price}
               ingredients={pizza.ingredients}
               img={pizza.img}
               />
               </div>
            ))}
         </div>
      </div>
      </>

         );
      };

   
export default Home;