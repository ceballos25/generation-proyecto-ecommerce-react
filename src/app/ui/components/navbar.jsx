import { useEffect, useState } from "react";
// import { cartService } from "../services/cartSevices";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("authUser"));
    setUser(storedUser);

    // cartService?.updateBadge?.();
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

          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center gap-2" href="/">
            <img src="/assets/pages/login.png" width="100" alt="logo" />
            <span className="fw-bold d-none d-md-inline nav-brand-text">
              Coroto
            </span>
          </a>

          {/* Mobile */}
          <div className="d-flex d-lg-none align-items-center gap-2 ms-auto">
            <a href="/cart" className="nav-icon-btn">
              <i className="bi bi-bag fs-5"></i>
            </a>
          </div>

          {/* Desktop */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto gap-1">
              <li className="nav-item">
                <a className="nav-link" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contacto</a>
              </li>
            </ul>

            <div className="d-none d-lg-flex align-items-center gap-3">
              
              <a href="/cart" className="nav-icon-btn">
                <i className="bi bi-bag fs-5"></i>
              </a>

              {/* Usuario */}
              {user && (
                <div className="dropdown">
                  <button
                    className="nav-icon-btn-primary"
                    data-bs-toggle="dropdown"
                  >
                    <i className="bi bi-person-circle fs-4"></i>
                  </button>

                  <ul className="dropdown-menu dropdown-menu-end">

                    <li>
                      <h6 className="dropdown-header text-center">
                        Mi Perfil
                      </h6>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Ver Perfil
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Mis Pedidos
                      </a>
                    </li>

                    {/* ADMIN */}
                    {user.role === "Admin" && (
                      <>
                        <li><hr /></li>

                        <li>
                          <h6 className="dropdown-header text-center">
                            Administración
                          </h6>
                        </li>

                        <li>
                          <a className="dropdown-item" href="/admin_dashboard">
                            Panel Productos
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="/admin_users">
                            Gestión Usuarios
                          </a>
                        </li>
                      </>
                    )}

                    <li><hr /></li>

                    <li>
                      <a className="dropdown-item text-danger" onClick={handleLogout}>
                        Cerrar Sesión
                      </a>
                    </li>

                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;