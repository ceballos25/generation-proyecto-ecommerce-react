import { Link } from "react-router-dom";
import { ROUTES } from "../router/routes";
import "../styles/pages/NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container text-center py-5">
      <h1 className="display-1 fw-bold text-secondary">404</h1>
      <h2 className="mb-3">Página no encontrada</h2>
      <p className="text-muted mb-4">
        La dirección que buscas no existe o fue movida.
      </p>
      <Link to={ROUTES.HOME} className="btn btn-primary">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
