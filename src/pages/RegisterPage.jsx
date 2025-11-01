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
        setError("")

        if (form.password !== form.confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }

        try {
            await register(form.email, form.password);
            navigate("/profile");
        } catch (err) {
            setError(err.message);
        }
        
    };



    return (
        <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 ">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
           <div className="card shadow p-4 " >
            <h2 className="mb-3 text-center" >Registrarse</h2>
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
                <input 
                name="email"
                type="email"
                placeholder="Correo electrónico"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required />

                <input
                name="password"
                 type="password"
                 placeholder="Contraseña"
                 className="form-control"
                 value={form.password}
                 onChange={handleChange} required />

                 <input 
                 type="password"
                 name="confirmPassword"
                 placeholder="Confirmar contraseña" 
                 className="form-control"
                 value={form.confirmPassword}
                 onChange={handleChange} required/>

                 {error && <p className="text-danger text-center">{error}</p>}
                 

                 <button type="submit" className="btn btn-success">
                    Continuar
                 </button>

            </form>

            
            

        </div>
      </div>
    </div>
    );
};

export default RegisterPage;