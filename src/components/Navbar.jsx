import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useCart } from "../context/CartContext";

const Navbar = () => {
   const { token, logout } = useUser();
   const { total } = useCart();
    

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm ">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-4 text-danger" to="/" > Pizzería Mamma Mía! </Link>
                <div className="d-flex align-items-center gap-3">
                    <Link className="nav-link text-dark" to="/"> 🍕 Home </Link>

                    {token ? (
                        <>
                        <Link className="nav-link" to="/profile">Profile</Link>
                        <button className="btn btn-danger ms-2" onClick={logout}>Logout</button>
                        </>

                    ) : (
                        <>
                        <Link className="nav-link text-dark" to="/register"> Register </Link>
                        <Link className="nav-link text-dark" to="/login"> Login </Link>
                        </>

                    )}

                    <Link className="nav-link text-dark" to="/cart"> 🛒Total: ${total.toLocaleString()}</Link>
                    
                    
                </div>
            </div>
        </nav>
     
                 
    );
};

export default Navbar;

 