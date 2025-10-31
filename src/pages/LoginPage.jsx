import React, { useState} from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const { login } = useUser();
    const navigate = useNavigate();

    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
           await login(form.email, form.password);
        navigate("/profile"); 
        } catch (err) {
            setError("Correo o contraseña incorrectos");
        }
        
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
                name="email"
                type="email"
                placeholder="Enter your email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required />
                 </div>

                 <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>

                <input
                 name="password"
                 type="password"
                 placeholder="Enter your password"
                 className="form-control"
                 value={form.password}
                 onChange={handleChange} 
                 required/>

                </div>

                {error && <p className="text-danger text-center">{error}</p>}

                 <button type="submit" className="btn btn-success w-100">
                   Login 
                 </button>

            </form>

            

            </div>
         </div>
        </div>
        
    );
};

export default LoginPage;