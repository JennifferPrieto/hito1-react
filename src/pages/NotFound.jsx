import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <h2>Opps! Página no encontrada</h2>
            <p>La ruta que buscas no existe o fue movida.</p>
            <Link to="/" className="btn btn-primary" >
            Volver al home </Link>

        </div>
    );
};

export default NotFound;