
import Header from "../components/Header.jsx";
import CardPizza from "../components/CardPizza.jsx";
import {pizzas} from "../data/pizzas";

const Home = () => {
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