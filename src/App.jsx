import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import RegisterPage from "./views/RegisterPage";
// import LoginPage from "./views/LoginPage";
import Home from "./views/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <div className="d-flex flex-column ">
      <Navbar/>

      <div className="flex-grow-1 d-flex">
     
      {/*<Home/>*/}
      <Cart/>
      {/*<RegisterPage/>*/}
      {/*<LoginPage/>*/}
      </div> 

      <Footer/>
      </div>
    </>
    
    
  );
}

export default App;