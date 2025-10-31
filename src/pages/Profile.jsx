import { useEffect } from "react";
import { useUser } from "../context/UserContext";

const Profile = () => {
    const { email, getProfile, logout } = useUser();

    useEffect(() => {
        getProfile();
    }, []);

    return (
      <div className="container mt-5 text-center">
        <h3> Perfil del usuario </h3>
        <p className="fs-5 mt-3">
            <strong>Email:</strong> {email || "Cargando..."}
        </p>
        <button className="btn btn-danger mt-3" onClick={logout}>
            Cerrar sesión
        </button>

      </div>
    );
};

export default Profile;