import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegisterPage from "./views/RegisterPage";
import LoginPage from "./views/LoginPage";
import Home from "./views/Home";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
      <Navbar/>

      <div className="flex-grow-1 d-flex justify-content-center align-items-center bg-light">
     
      {/*<Home/> */}
      {/*<RegisterPage/>*/}
       <LoginPage/>
      </div> 

      <Footer/>
      </div>
    </>
    
    
  );
}

export default App;