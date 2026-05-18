import { Link } from "react-router-dom";
import "./Footer.css";

const headingStyle = {
  color: "var(--beige)",
  letterSpacing: "1px",
};

const iconStyle = { color: "var(--beige)" };

const socialBtnStyle = { width: 40, height: 40 };

const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-4 footer-container">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-4">
            <Link
              className="d-flex align-items-center gap-2 text-decoration-none mb-3"
              to="/"
            >
              <span className="fw-bold fs-4 text-white">Coroto</span>
            </Link>
            <p className="text-white mb-1">
              <span className="fw-semibold" style={{ color: "var(--beige)" }}>
                &quot;Lo que uno desecha, otro lo necesita&quot;
              </span>
            </p>
            <p className="text-white small mb-4">
              Dándole una segunda oportunidad a la tecnología y el hogar en
              Colombia.
            </p>
            <div className="d-flex gap-2">
              <a
                href="#"
                className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                style={socialBtnStyle}
                aria-label="Facebook"
                onClick={(e) => e.preventDefault()}
              >
                <i className="bi bi-facebook" />
              </a>
              <a
                href="#"
                className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                style={socialBtnStyle}
                aria-label="Instagram"
                onClick={(e) => e.preventDefault()}
              >
                <i className="bi bi-instagram" />
              </a>
              <a
                href="#"
                className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                style={socialBtnStyle}
                aria-label="Twitter X"
                onClick={(e) => e.preventDefault()}
              >
                <i className="bi bi-twitter-x" />
              </a>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-lg-2 offset-lg-1">
            <h6
              className="text-uppercase small fw-bold mb-3"
              style={headingStyle}
            >
              Nosotros
            </h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-white text-decoration-none small d-flex align-items-center gap-2 hover-beige"
                >
                  <i className="bi bi-people" style={iconStyle} />
                  Quiénes Somos
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact"
                  className="text-white text-decoration-none small d-flex align-items-center gap-2 hover-beige"
                >
                  <i className="bi bi-chat-dots" style={iconStyle} />
                  Contacto
                </Link>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-white text-decoration-none small d-flex align-items-center gap-2 hover-beige"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="bi bi-tree" style={iconStyle} />
                  Sostenibilidad
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-sm-4 col-lg-2">
            <h6
              className="text-uppercase small fw-bold mb-3"
              style={headingStyle}
            >
              Legal
            </h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-white text-decoration-none small d-flex align-items-center gap-2 hover-beige"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="bi bi-file-text" style={iconStyle} />
                  Términos
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-white text-decoration-none small d-flex align-items-center gap-2 hover-beige"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="bi bi-shield-check" style={iconStyle} />
                  Privacidad
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-white text-decoration-none small d-flex align-items-center gap-2 hover-beige"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="bi bi-arrow-return-left" style={iconStyle} />
                  Devoluciones
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-sm-4 col-lg-3">
            <h6
              className="text-uppercase small fw-bold mb-3"
              style={headingStyle}
            >
              Ubicación
            </h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2 d-flex align-items-center gap-2 text-white small">
                <i className="bi bi-geo-alt-fill" style={iconStyle} />
                <span>Medellín, Antioquia</span>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2 text-white small">
                <i className="bi bi-envelope-at-fill" style={iconStyle} />
                <span>contacto@coroto.com</span>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2 text-white small">
                <i className="bi bi-whatsapp" style={iconStyle} />
                <span>+57 (300) 000-0000</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary opacity-25 mt-5 mb-4" />

        <div className="row">
          <div className="col-12 col-md-6">
            <small className="text-white">
              © 2026{" "}
              <span className="fw-semibold" style={{ color: "var(--beige)" }}>
                Coroto
              </span>
              . Todos los derechos reservados.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
