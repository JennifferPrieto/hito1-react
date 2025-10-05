import { Alert } from "bootstrap";

const Profile = () => {
    const userEmail ="usuario@correo.com";

    const handleLogout = () => {
        alert("Sesión cerrada");
    };


    return (
        <div  className="container my-5 text-center">
            <h2 className="mb-4">Perfil de usuario</h2>
            <p><strong>Email:</strong> {userEmail}</p>
            <button className="btn btn-danger mt-3" onClick={handleLogout}>Cerrar Sesión</button>

        </div>
    );
};

export default Profile;