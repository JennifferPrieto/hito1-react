import React, { useState} from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit =(e) => {
        e.preventDefault();

       if (!email || !password ) {
        setMessage("Todos los campos son obligatorios." );
        setIsSuccess(false);
        return;
       }

       if (password.length < 6) {
        setMessage("La contraseña debe tener al menos 6 caracteres.");
        setIsSuccess(false);
        return;
       }

       
        setMessage("Inicio de sesión exitoso!");
        setIsSuccess(true);
      

       
       
    };


    return (
        <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100">
        <div className="col-12 col-sm-8  col-md-6 col-lg-4">
         <div className="card shadow p-4 " > 
            <h2 className="text-center mb-3">Login</h2>
            <form onSubmit={handleSubmit} className="d-flex flex-column  gap-3">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                
                <input 
                type="email"
                placeholder="Enter your email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
                 </div>

                 <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>

                <input
                 type="password"
                 placeholder="Enter your password"
                 className="form-control"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)} />

                </div>

                 <button type="submit" className="btn btn-success w-100">
                   Login 
                 </button>

            </form>

            {message && (
                <p className={`mt-3 ${isSuccess ? "text-success" : "text-danger" }`}>
                    {isSuccess ? <FaCheckCircle /> : <FaTimesCircle />} {message}
                </p>
            )}

            </div>
         </div>
        </div>
        
    );
};

export default LoginPage;