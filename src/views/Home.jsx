
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import {pizzas} from "../data/pizzas";

const Home = () => {
    return (
      <div className="container my-5">
         <h2 className="text-center mb-4"> Nuestro Menú</h2>
         <div className="d-flex flex-wrap gap-4 justify-content-center">
            {pizzas.map ((pizza) => (
               <CardPizza
               key={pizza.id}
               name={pizza.name}
               price={pizza.price}
               ingredients={pizza.ingredients}
               img={pizza.img}
               />
            ))}
         </div>
      </div>

         );
      };

   
export default Home;