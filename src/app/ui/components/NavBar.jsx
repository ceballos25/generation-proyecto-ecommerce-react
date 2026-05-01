import { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";

const CorotoNavBar = () => {
  const [user, setUser] = useState(null);
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("authUser"));
    setUser(storedUser);
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("authUser");
    window.location.reload();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-white offcanvas-border">
        <div className="container mt-3">

          <a className="navbar-brand d-flex align-items-center gap-2" href="/">
            <img src="/assets/pages/login.png" className="img-fluid" alt="logo-nav" width="100" />
            <span className="fw-bold d-none d-md-inline nav-brand-text">Coroto</span>
          </a>

          <div className="d-flex d-lg-none align-items-center gap-2 ms-auto">
            <div className="position-relative" style={{ width: '46px', height: '46px' }}>
              <a href="/cart" className="nav-icon-btn">
                <i className="bi bi-bag fs-5"></i>
              </a>
              <span className="position-absolute badge rounded-pill nav-badge">
                {totalItems > 0 ? totalItems : ''}
              </span>
            </div>

            <button
              className="navbar-toggler border-0 shadow-none ps-1"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto gap-1">
              <li className="nav-item">
                <a className="nav-link px-3 fw-semibold" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 fw-semibold" href="/about">Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 fw-semibold" href="/contact">Contacto</a>
              </li>
            </ul>

            <div className="d-none d-lg-flex align-items-center gap-3">

              <div className="position-relative" style={{ width: '46px', height: '46px' }}>
                <a href="/cart" className="nav-icon-btn">
                  <i className="bi bi-bag fs-5"></i>
                </a>
                <span className="position-absolute badge rounded-pill nav-badge">
                  {totalItems > 0 ? totalItems : ''}
                </span>
              </div>

              <div className="dropdown">
                <button className="nav-icon-btn-primary" data-bs-toggle="dropdown">
                  <i className="bi bi-person-circle fs-4"></i>
                </button>

                <ul className="dropdown-menu dropdown-menu-end shadow-lg mt-2 rounded-4 py-3">

                  {user ? (
                    <>
                      <li className="dropdown-header text-center">Mi Perfil</li>

                      <li>
                        <a className="dropdown-item" href="#">Ver Perfil</a>
                      </li>

                      {user.role === "Admin" && (
                        <>
                          <li><hr /></li>
                          <li className="dropdown-header text-center">Admin</li>
                          <li><a className="dropdown-item" href="/admin_dashboard">Panel</a></li>
                        </>
                      )}

                      <li><hr /></li>

                      <li>
                        <a className="dropdown-item text-danger" href="#" onClick={handleLogout}>
                          Cerrar sesión
                        </a>
                      </li>
                    </>
                  ) : (
                    <>
                      <li><a className="dropdown-item" href="/login">Login</a></li>
                      <li><a className="dropdown-item" href="/register">Register</a></li>
                    </>
                  )}

                </ul>
              </div>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default CorotoNavBar;