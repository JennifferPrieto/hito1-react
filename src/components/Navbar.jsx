import { link } from "react-router-dom";


const Navbar = () => {
    const total = 0;
    

    return (
        <nav className="container-fliud d-flex justify-content-between align-items-center p-2 bg-dark ">
            <div className="d-flex align-items-center gap-2">

            
           
                 <p className="text-white fs-5 m-2">Pizzería Mamma Mía!</p>
                 <button className="btn btn-outline-light">🍕 Home</button>


            
            
           

            
            {token ? (
                <>
                <button className="btn btn-outline-light ">🔓 Profile</button>
                <button className="btn btn-outline-light">🔓 Logout</button>
                </>
            ) : (
                <>
                <button className="btn btn-outline-light" >🔐 Login</button>
                <button className="btn btn-outline-light">🔐 Register</button>
                </>
                
            )}

            </div>

            <div>
                 <button className="btn btn-outline-info">
                 🛒  Total: ${total.toLocaleString()}
            </button>
            </div>
            

            
        </nav>
    );
};

export default Navbar;
