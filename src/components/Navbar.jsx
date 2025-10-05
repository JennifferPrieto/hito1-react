import { Link } from "react-router-dom";


const Navbar = () => {
    const total = 0;
    

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm ">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-4 text-danger" to="/" > Pizzería Mamma Mía! </Link>
                <div className="d-flex align-items-center gap-3">
                    <Link className="nav-link text-dark" to="/"> 🍕 Home </Link>
                    
                    <Link className="nav-link text-dark" to="/register"> Register </Link>
                    <Link className="nav-link text-dark" to="/login"> Login </Link>
                    <Link className="btn btn-success px-3 fw-semibold" to="/cart">  🛒  Total: $0 </Link>

                </div>
            </div>
        </nav>

            
           
                 
    );
};

export default Navbar;
