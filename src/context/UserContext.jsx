import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [email, setEmail] = useState(localStorage.getItem("email") || "");
    const [error, setError] = useState(null);

    const login = async (emailInput, password) => {
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify({ email: emailInput, password }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Error al iniciar sesión");

            
            setToken(data.token);
            setEmail(data.email);

            localStorage.setItem("token", data.token);
            localStorage.setItem("email", data.email);
            setError(null);
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    const register = async (emailInput, password) => {
        try {
            const res = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify({ email: emailInput, password }),
            });
            
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Error al registrarse");
            
            setToken(data.token);
            setEmail(data.email);

            localStorage.setItem("token", data.token);
            localStorage.setItem("email", data.email);
            setError(null);
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    const  getProfile = async () => {
        if (!token) return;
        try {
            const res = await fetch("http://localhost:5000/api/auth/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Error al obtener el perfil");
            
            
            setEmail(data.email);
        } catch (err) {
            setError(err.message);
            logout();
        }
      
    };

    const logout = () => {
        setToken("");
        setEmail("");
        localStorage.removeItem("token");
        localStorage.removeItem("email");
    };

    useEffect(() => {
        if (token) getProfile();
    }, [token]);

    return (
        <UserContext.Provider
         value={{
            token,
            email,
            error,
            login,
            register,
            logout,
            getProfile,
         }}
         >
            {children}
         </UserContext.Provider>
    );


    };

    export const useUser = () => useContext(UserContext);