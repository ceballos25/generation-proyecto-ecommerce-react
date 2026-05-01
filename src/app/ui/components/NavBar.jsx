import { useEffect, useState } from "react";

const CorotoNavBar = () => {
  const [user, setUser] = useState(null);

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

          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center gap-2" href="/">
            <img src="/assets/pages/login.png" className="img-fluid" alt="logo-nav" width="100" />
            <span className="fw-bold d-none d-md-inline nav-brand-text">Coroto</span>
          </a>

          {/* Acciones mobile */}
          <div className="d-flex d-lg-none align-items-center gap-2 ms-auto">
            <div className="position-relative" style={{ width: '46px', height: '46px' }}>
              <a href="/cart" className="nav-icon-btn">
                <i className="bi bi-bag fs-5"></i>
              </a>
              <span id="cart-count-mobile" className="position-absolute badge rounded-pill nav-badge">0</span>
            </div>
            <button
              className="navbar-toggler border-0 shadow-none ps-1"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNav"
              aria-controls="offcanvasNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          {/* Nav desktop */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto gap-1">
              <li className="nav-item">
                <a className="nav-link px-3 fw-semibold text-uppercase d-flex align-items-center gap-2 rounded-3 nav-link-item" href="/">
                  <i className="bi bi-house-door fs-5"></i>Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 fw-semibold text-uppercase d-flex align-items-center gap-2 rounded-3 nav-link-item" href="/about">
                  <i className="bi bi-people fs-5"></i>Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 fw-semibold text-uppercase d-flex align-items-center gap-2 rounded-3 nav-link-item" href="/contact">
                  <i className="bi bi-chat-dots fs-5"></i>Contacto
                </a>
              </li>
            </ul>

            {/* Acciones desktop */}
            <div className="d-none d-lg-flex align-items-center gap-3">

              <div className="position-relative" style={{ width: '46px', height: '46px' }}>
                <a href="/cart" className="nav-icon-btn">
                  <i className="bi bi-bag fs-5"></i>
                </a>
                <span id="cart-count" className="position-absolute badge rounded-pill nav-badge">0</span>
              </div>

              {/* Dropdown desktop */}
              <div className="dropdown">
                <button className="nav-icon-btn-primary" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-person-circle fs-4"></i>
                </button>

                <ul className="dropdown-menu dropdown-menu-end shadow-lg mt-2 rounded-4 py-3 nav-dropdown">
                  {user ? (
                    <>
                      <li>
                        <h6 className="dropdown-header fw-bold small text-uppercase text-center nav-dropdown-header">
                          Mi Perfil
                        </h6>
                      </li>
                      <li>
                        <a className="dropdown-item py-2 px-4 d-flex align-items-center gap-3 nav-dropdown-item" href="#">
                          <i className="bi bi-person fs-5"></i>Ver Perfil
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item py-2 px-4 d-flex align-items-center gap-3 nav-dropdown-item" href="#">
                          <i className="bi bi-receipt fs-5"></i>Mis Pedidos
                        </a>
                      </li>

                      {user.role === "Admin" && (
                        <>
                          <li><hr className="dropdown-divider nav-dropdown-divider my-2" /></li>
                          <li>
                            <h6 className="dropdown-header fw-bold small text-uppercase text-center nav-dropdown-header">
                              Administración
                            </h6>
                          </li>
                          <li>
                            <a className="dropdown-item py-2 px-4 d-flex align-items-center gap-3 nav-dropdown-item" href="/admin_dashboard">
                              <i className="bi bi-kanban fs-5"></i>Panel Productos
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item py-2 px-4 d-flex align-items-center gap-3 nav-dropdown-item" href="/admin_users">
                              <i className="bi bi-people-fill fs-5"></i>Gestión Usuarios
                            </a>
                          </li>
                        </>
                      )}

                      <li><hr className="dropdown-divider nav-dropdown-divider my-2" /></li>
                      <li>
                        <a className="dropdown-item py-2 px-4 d-flex align-items-center gap-3 nav-danger-item" href="#" onClick={handleLogout}>
                          <i className="bi bi-box-arrow-right fs-5"></i>Cerrar Sesión
                        </a>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <h6 className="dropdown-header fw-bold small text-uppercase text-center nav-dropdown-header">
                          Bienvenido
                        </h6>
                      </li>
                      <li>
                        <a className="dropdown-item py-2 px-4 d-flex align-items-center gap-3 nav-dropdown-item" href="/login">
                          <i className="bi bi-box-arrow-in-right fs-5"></i>Iniciar Sesión
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item py-2 px-4 d-flex align-items-center gap-3 nav-dropdown-item" href="/register">
                          <i className="bi bi-person-plus fs-5"></i>Registrarse
                        </a>
                      </li>
                    </>
                  )}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </nav>

      {/* Offcanvas Mobile */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNav" style={{ maxWidth: '300px' }}>
        <div className="offcanvas-header offcanvas-border px-4 py-3">
          <div className="d-flex align-items-center gap-2">
            <img src="/assets/pages/login.png" width="80" alt="logo" />
            <span className="fw-bold offcanvas-brand-text">Coroto</span>
          </div>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body px-4 pt-3 d-flex flex-column">

          {/* Perfil */}
          {user ? (
            <div className="d-flex align-items-center gap-3 mb-4 offcanvas-profile">
              <div className="offcanvas-avatar">
                <i className="bi bi-person-fill fs-5"></i>
              </div>
              <div>
                <p className="mb-0 fw-semibold offcanvas-username">{user.username}</p>
                <p className="mb-0 offcanvas-email">{user.email}</p>
              </div>
            </div>
          ) : (
            <div className="d-flex align-items-center gap-3 mb-4 offcanvas-profile">
              <div className="offcanvas-avatar">
                <i className="bi bi-person-fill fs-5"></i>
              </div>
              <div>
                <p className="mb-0 fw-semibold offcanvas-username">Invitado</p>
                <p className="mb-0 offcanvas-email">Inicia sesión para continuar</p>
              </div>
            </div>
          )}

          {/* Links siempre visibles */}
          <p className="mb-2 offcanvas-section-label">Menú</p>
          <ul className="nav flex-column gap-1 mb-4">
            <li><a className="nav-link offcanvas-nav-link" href="/"><i className="bi bi-house-door"></i> Inicio</a></li>
            <li><a className="nav-link offcanvas-nav-link" href="/about"><i className="bi bi-people"></i> Nosotros</a></li>
            <li><a className="nav-link offcanvas-nav-link" href="/contact"><i className="bi bi-chat-dots"></i> Contacto</a></li>
          </ul>

          {/* Sección admin — solo si es Admin */}
          {user?.role === "Admin" && (
            <>
              <p className="mb-2 offcanvas-section-label">Administración</p>
              <ul className="nav flex-column gap-1 mb-4">
                <li><a className="nav-link offcanvas-nav-link" href="/admin_dashboard"><i className="bi bi-kanban"></i> Panel Productos</a></li>
                <li><a className="nav-link offcanvas-nav-link" href="/admin_users"><i className="bi bi-people-fill"></i> Gestión Usuarios</a></li>
              </ul>
            </>
          )}

          {/* Footer offcanvas */}
          <div className="mt-auto pb-2 d-flex flex-column gap-2">
            {user ? (
              <a href="#" className="offcanvas-logout" onClick={handleLogout}>
                <i className="bi bi-box-arrow-right"></i> Cerrar Sesión
              </a>
            ) : (
              <>
                <a href="/login" className="offcanvas-logout">
                  <i className="bi bi-box-arrow-in-right"></i> Iniciar Sesión
                </a>
                <a href="/register" className="offcanvas-logout">
                  <i className="bi bi-person-plus"></i> Registrarse
                </a>
              </>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default CorotoNavBar;