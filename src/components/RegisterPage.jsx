import React, { useState} from "react";
import {  FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit =(e) => {
        e.preventDefault();

       if (!email || !password || !confirmPassword) {
        setMessage("Todos los campos son obligatorios." );
        setIsSuccess(false);
        return;
       }

       if (password.length < 6) {
        setMessage("La contraseña debe tener al menos 6 caracteres.");
        setIsSuccess(false);
        return;
       }

       if (password !== confirmPassword) {
        setMessage("Las contraseñas no coinciden.");
        setIsSuccess(false);
        return;
       }

       setMessage("Registro exitoso!");
       setIsSuccess(true);
    };


    return (
        <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
           <div className="card shadow p-4 " >
            <h2 className="mb-3 text-center" >Register</h2>
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
                <input 
                type="email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

                <input
                 type="password"
                 placeholder="Password"
                 className="form-control"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)} />

                 <input 
                 type="password"
                 placeholder="Confirm password" 
                 className="form-control"
                 value={confirmPassword}
                 onChange={(e) => setConfirmPassword(e.target.value)}/>

                 <button type="submit" className="btn btn-success">
                    Register
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

export default RegisterPage;