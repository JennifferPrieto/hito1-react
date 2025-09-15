import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import RegisterPage from "./components/RegisterPage";
//import LoginPage from "./components/LoginPage";
import Home from "./views/Home";
import Cart from "./components/Cart";

function App() {
  return (
    
      <div className="container-fluid d-flex flex-column min-vh-100" >
      <Navbar/>

      <main className="flex-grow-1 w-100">
     
      {/*<Home/>*/}
      <Cart/>
      {/*<RegisterPage/>*/}
      {/*<LoginPage/>*/}
      </main> 

      <Footer/>
      </div>
    
    
    
  );
}

export default App;