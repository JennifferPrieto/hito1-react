import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null);

    const login = async (email, password) => {
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message || "Error al iniciar sesión");

            setToken(data.token);
            setEmail(data.email);
        } catch (error) {
            alert(error.message);
        }
    };

    const register = async (email, password) => {
        try {
            const res = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();

            if (!res.ok) throw new Error(data.message || "Error al registrarse");

            setToken(data.token);
            setEmail(data.email);
        } catch (error) {
            alert(error.message);
        }
    };

    const  getProfile = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/auth/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await res.json();

            if (res.ok) {
                setEmail(data.email);
            } else {
                throw new Error("No se pudo obtener el perfil");
            }  
        } catch (error) {
            console.error(error);
        }
    };

    const logout = () => {
        setToken(null);
        setEmail(null);
    };

    return (
        <UserContext.Provider
         value={{
            token,
            email,
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