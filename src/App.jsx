import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Pizza from "./pages/Pizza";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import { useUser } from "./context/UserContext";

export default  function App() {
  const { token } = useUser();

  return (
    
      <>
      <Navbar />
      
      <main className="container mt-4">

       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pizza/:id" element={<Pizza/>}/>
        <Route path="/cart" element={<Cart/>}/>

        <Route path="/profile" 
          element={
            <ProtectedRoute>
               <Profile />
            </ProtectedRoute>
            } 
        />



        <Route path="/login" element={token ? <Navigate to="/" /> : <LoginPage/>}/> 
        <Route path="/register" element={token ? <Navigate to="/" /> : <RegisterPage />}/> 
        
        
        <Route path="*" element={<NotFound />} />
      </Routes>


      </main>

      <Footer/>

      </>

      
    
  );
}

