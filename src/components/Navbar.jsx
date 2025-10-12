import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
 
const Navbar = () => {
   const { total } = useCart();
    

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm ">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-4 text-danger" to="/" > Pizzería Mamma Mía! </Link>
                <div className="d-flex align-items-center gap-3">
                    <Link className="nav-link text-dark" to="/"> 🍕 Home </Link>
                    
                    <Link className="nav-link text-dark" to="/register"> Register </Link>
                    <Link className="nav-link text-dark" to="/login"> Login </Link>
                    <Link className="nav-link" to="/cart"> 
                     🛒  Total: ${total.toLocaleString()} 
                    </Link>
                </div>
            </div>
        </nav>
     
                 
    );
};

export default Navbar;

 