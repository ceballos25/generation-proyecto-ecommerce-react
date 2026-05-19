import { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import "../../styles/components/layout/NavBar.css";

const navLinkClass = ({ isActive }) =>
  `nav-link d-inline-flex align-items-center gap-2 px-3 py-2 rounded-3 fw-semibold nav-link-coroto ${
    isActive ? "active" : ""
  }`;

const NavBar = () => {
  const [user, setUser] = useState(null);
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const offcanvasCloseBtnRef = useRef(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("authUser"));
    setUser(storedUser);
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("authUser");
    window.location.reload();
  };

  // Menú hamburguesa: simula pulsar la X para cerrar (así el fondo oscuro no falla en el móvil)
  const closeMobileNav = useCallback(() => {
    offcanvasCloseBtnRef.current?.click();
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top bg-white coroto-navbar offcanvas-border shadow-sm navbar-container"
        aria-label="Principal"
      >
        <div className="container mt-3">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <img
              src="src/assets/logo.png"
              className="img-fluid"
              alt="logo-nav"
              width={100}
            />
            <span className="fw-bold  d-md-inline nav-brand-text">Coroto</span>
          </Link>

          <div className="d-flex d-lg-none align-items-center gap-2 ms-auto">
            <div
              className="position-relative d-flex align-items-center justify-content-center"
              style={{ width: 46, height: 46 }}
            >
              <Link
                to="/cart"
                className="nav-icon-btn"
                aria-label={`Carrito${totalItems > 0 ? `, ${totalItems} artículos` : ""}`}
              >
                <i className="bi bi-cart3 fs-5" aria-hidden="true" />
              </Link>
              {totalItems > 0 && (
                <span className="position-absolute badge rounded-pill nav-badge">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </div>

            <button
              className="navbar-toggler border-0 shadow-none ps-1"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNav"
              aria-controls="offcanvasNav"
              aria-expanded="false"
              aria-label="Abrir menú"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-1">
              <li className="nav-item">
                <NavLink to="/" end className={navLinkClass}>
                  <i className="bi bi-house-door" aria-hidden="true" />
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={navLinkClass}>
                  <i className="bi bi-people" aria-hidden="true" />
                  Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={navLinkClass}>
                  <i className="bi bi-envelope" aria-hidden="true" />
                  Contacto
                </NavLink>
              </li>
            </ul>

            <div className="d-none d-lg-flex align-items-center gap-2">
              <div
                className="position-relative d-flex align-items-center justify-content-center"
                style={{ width: 46, height: 46 }}
              >
                <Link
                  to="/cart"
                  className="nav-icon-btn"
                  aria-label={`Carrito${totalItems > 0 ? `, ${totalItems} artículos` : ""}`}
                >
                  <i className="bi bi-cart3 fs-5" aria-hidden="true" />
                </Link>
                {totalItems > 0 && (
                  <span className="position-absolute badge rounded-pill nav-badge">
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </div>

              <div className="dropdown">
                <button
                  type="button"
                  className="nav-icon-btn-primary"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-label="Menú de cuenta"
                >
                  <i className="bi bi-person-circle fs-4" aria-hidden="true" />
                </button>

                <ul className="dropdown-menu dropdown-menu-end shadow-lg mt-2 rounded-4 py-2 nav-dropdown">
                  {user ? (
                    <>
                      <li>
                        <h6 className="dropdown-header nav-dropdown-header text-center text-uppercase small">
                          Mi cuenta
                        </h6>
                      </li>
                      <li>
                        <span className="dropdown-item nav-dropdown-item d-flex align-items-center gap-2 py-2 px-3 text-muted small">
                          <i className="bi bi-person" aria-hidden="true" />
                          Ver perfil (pronto)
                        </span>
                      </li>
                      {user.role === "Admin" && (
                        <>
                          <li>
                            <hr className="dropdown-divider nav-dropdown-divider" />
                          </li>
                          <li>
                            <h6 className="dropdown-header nav-dropdown-header text-center text-uppercase small">
                              Admin
                            </h6>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item nav-dropdown-item d-flex align-items-center gap-2 py-2 px-3"
                              to="/admin_dashboard"
                            >
                              <i
                                className="bi bi-speedometer2"
                                aria-hidden="true"
                              />
                              Panel
                            </Link>
                          </li>
                        </>
                      )}
                      <li>
                        <hr className="dropdown-divider nav-dropdown-divider" />
                      </li>
                      <li>
                        <button
                          type="button"
                          className="dropdown-item nav-danger-item d-flex align-items-center gap-2 py-2 px-3 w-100 border-0 bg-transparent text-start"
                          onClick={handleLogout}
                        >
                          <i
                            className="bi bi-box-arrow-right"
                            aria-hidden="true"
                          />
                          Cerrar sesión
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link
                          className="dropdown-item nav-dropdown-item d-flex align-items-center gap-2 py-2 px-3"
                          to="/login"
                        >
                          <i
                            className="bi bi-box-arrow-in-right"
                            aria-hidden="true"
                          />
                          Iniciar sesión
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item nav-dropdown-item d-flex align-items-center gap-2 py-2 px-3"
                          to="/register"
                        >
                          <i className="bi bi-person-plus" aria-hidden="true" />
                          Crear cuenta
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasNav"
        aria-labelledby="offcanvasNavLabel"
        data-bs-scroll="false"
        data-bs-backdrop="true"
      >
        <div className="offcanvas-header border-bottom align-items-center">
          <div>
            <h2
              className="h5 mb-0 offcanvas-brand-text fw-bold"
              id="offcanvasNavLabel"
            >
              Coroto
            </h2>
            <p className="small text-muted mb-0">Menú</p>
          </div>
          <button
            ref={offcanvasCloseBtnRef}
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Cerrar menú"
          />
        </div>
        <div className="offcanvas-body d-flex flex-column">
          {user && (
            <div className="offcanvas-profile d-flex align-items-center gap-3 mb-4">
              <div className="offcanvas-avatar">
                <i className="bi bi-person-fill fs-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <div className="offcanvas-username fw-semibold text-truncate">
                  {[user.username, user.lastname].filter(Boolean).join(" ")}
                </div>
                {user.email && (
                  <div className="offcanvas-email text-truncate">
                    {user.email}
                  </div>
                )}
              </div>
            </div>
          )}

          <p className="offcanvas-section-label mb-2 ps-1">Navegación</p>
          <div className="d-flex flex-column gap-1 mb-4">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `offcanvas-nav-link d-flex align-items-center gap-2${
                  isActive ? " offcanvas-nav-link--active" : ""
                }`
              }
              onClick={closeMobileNav}
            >
              <i className="bi bi-house-door" aria-hidden="true" />
              Inicio
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `offcanvas-nav-link d-flex align-items-center gap-2${
                  isActive ? " offcanvas-nav-link--active" : ""
                }`
              }
              onClick={closeMobileNav}
            >
              <i className="bi bi-people" aria-hidden="true" />
              Nosotros
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `offcanvas-nav-link d-flex align-items-center gap-2${
                  isActive ? " offcanvas-nav-link--active" : ""
                }`
              }
              onClick={closeMobileNav}
            >
              <i className="bi bi-envelope" aria-hidden="true" />
              Contacto
            </NavLink>
            <Link
              to="/cart"
              className="offcanvas-nav-link d-flex align-items-center gap-2"
              onClick={closeMobileNav}
            >
              <i className="bi bi-cart3" aria-hidden="true" />
              Carrito
              {totalItems > 0 && (
                <span
                  className="badge rounded-pill ms-auto"
                  style={{ backgroundColor: "var(--primary)" }}
                >
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>
          </div>

          <p className="offcanvas-section-label mb-2 ps-1">Cuenta</p>
          <div className="d-flex flex-column gap-2 mt-1">
            {user ? (
              <>
                {user.role === "Admin" && (
                  <Link
                    to="/admin_dashboard"
                    className="offcanvas-nav-link d-flex align-items-center gap-2"
                    onClick={closeMobileNav}
                  >
                    <i className="bi bi-speedometer2" aria-hidden="true" />
                    Panel admin
                  </Link>
                )}
                <button
                  type="button"
                  className="offcanvas-logout"
                  onClick={(e) => {
                    closeMobileNav();
                    handleLogout(e);
                  }}
                >
                  <i className="bi bi-box-arrow-right" aria-hidden="true" />
                  Cerrar sesión
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="offcanvas-nav-link d-flex align-items-center gap-2"
                  onClick={closeMobileNav}
                >
                  <i className="bi bi-box-arrow-in-right" aria-hidden="true" />
                  Iniciar sesión
                </Link>
                <Link
                  to="/register"
                  className="btn btn-primary w-100 rounded-3 d-flex align-items-center justify-content-center gap-2 py-2"
                  onClick={closeMobileNav}
                >
                  <i className="bi bi-person-plus" aria-hidden="true" />
                  Crear cuenta
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
