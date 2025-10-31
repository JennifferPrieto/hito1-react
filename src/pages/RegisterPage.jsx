import React, { useState} from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const { register } = useUser();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "", 
        password: "",
        confirmPassword: "",
     });

     const [error, setError] = useState("");

    const handleChange = (e) =>  {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }
        
        await register(form.email, form.password);
        navigate("/profile");
    };



    return (
        <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
           <div className="card shadow p-4 " >
            <h2 className="mb-3 text-center" >Register</h2>
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
                <input 
                name="email"
                type="email"
                placeholder="Email"
                className="form-control"
                value={form.email}
                onChange={handleChange} />

                <input
                name="password"
                 type="password"
                 placeholder="Password"
                 className="form-control"
                 value={form.password}
                 onChange={handleChange} />

                 <input 
                 type="password"
                 name="confirmPassword"
                 placeholder="Confirm password" 
                 className="form-control"
                 value={form.confirmPassword}
                 onChange={handleChange} required/>

                 {error && <p className="text-danger text-center">{error}</p>}
                 

                 <button type="submit" className="btn btn-success">
                    Register
                 </button>

            </form>

            
            

        </div>
      </div>
    </div>
    );
};

export default RegisterPage;