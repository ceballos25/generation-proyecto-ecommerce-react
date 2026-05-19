import "../../styles/components/auth/LoginForm.css";

const LoginForm = () => {
  return (
    <div className="loginform-container">
      <div className="row login-container">
        <div className="col-12 col-md-6 d-none d-md-flex justify-content-center align-items-center">
          <img
            src="../src/assets/logo.png"
            className="img-fluid"
            alt="imagen-login"
          />
        </div>

        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mx-auto p-4 border rounded shadow-sm bg-white form-container">
          <div className="w-100">
            <h4 className="text-center mb-4 fw-semibold">Iniciar sesión</h4>
            <form id="loginForm" className="m-5 needs-validation" noValidate>
              <div className="mb-3">
                <label className="form-label text-muted" htmlFor="email">
                  <i className="bi bi-envelope-fill"></i> Correo
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control rounded-4 border-2 py-2 px-2"
                  placeholder="Tu email"
                  required
                />
                <div className="invalid-feedback">
                  Ingresa un correo válido.
                </div>
              </div>

              <div className="mb-4 position-relative">
                <label className="form-label text-muted" htmlFor="password">
                  <i className="bi bi-person-fill-lock"></i> Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control rounded-4 border-2 py-2 px-3 pe-5"
                  placeholder="Tu contraseña"
                  required
                />
                <div className="invalid-feedback">
                  La contraseña es obligatoria (mínimo 6 caracteres).
                </div>
                <span
                  id="showPassword"
                  className="position-absolute top-50 end-0 mt-1 me-3"
                >
                  <i id="icon" className="bi bi-eye"></i>
                </span>
              </div>

              <div className="d-grid mb-3">
                <button className="btn btn-primary rounded-3 py-2">
                  Ingresar
                </button>
              </div>
            </form>
            <p className="text-center mt-3 mb-0">
              ¿No tienes una cuenta?{" "}
              <a
                href="/register"
                className="fw-semibold text-secondary text-decoration-none"
              >
                Regístrate
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
