import "./register.css";

const Register = () => {
  return (
    <main className="main-container">
      <div className="container-fluid py-2">
        <div className="row g-5 justify-content-center align-items-center register-wrapper">
          <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-center align-items-start ps-0 ms-0">
            <div className="d-flex flex-column gap-2 mb-4">
              <span className="badge rounded-pill border border-success-subtle text-success fw-semibold px-3 py-2 register-badge">
                <i className="bi bi-shield-check me-1"></i> Plataforma segura
              </span>
              <h3 className="fw-bold text-dark fs-2 mb-0">
                Únete a <br /> nuestra comunidad
              </h3>
              <p className="text-secondary mb-0 register-hero-description">
                Crea tu cuenta y accede a todos nuestros servicios de forma
                rápida y segura.
              </p>
            </div>

            <img
              src="../assets/pages/login.png"
              alt="Logo"
              className="img-fluid mb-4 align-self-start register-hero-image"
            />

            <div className="d-flex gap-2">
              <div className="border rounded-3 px-3 py-2">
                <div className="fw-bold text-success">100%</div>
                <div className="text-secondary register-stat-label">SEGURO</div>
              </div>
              <div className="border rounded-3 px-3 py-2">
                <div className="fw-bold text-success">24/7</div>
                <div className="text-secondary register-stat-label">
                  DISPONIBLE
                </div>
              </div>
              <div className="border rounded-3 px-3 py-2">
                <div className="fw-bold text-success">+5k</div>
                <div className="text-secondary register-stat-label">
                  USUARIOS
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 px-lg-4 register-form-col">
            <form id="registroForm" className="p-4 needs-validation" noValidate>
              <h2 className="text-center mb-4">
                <i className="bi bi-person-plus-fill me-2"></i>Formulario de
                Registro
              </h2>

              <div className="row mb-3">
                <div className="col-lg-6">
                  <label htmlFor="nombre" className="form-label">
                    Nombre
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-person-fill"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      required
                    />
                    <div className="invalid-feedback">
                      Por favor ingresa tu nombre.
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="apellidos" className="form-label">
                    Apellidos
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-person-fill"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="apellidos"
                      name="apellidos"
                      required
                    />
                    <div className="invalid-feedback">
                      Por favor ingresa tus apellidos.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="correo" className="form-label">
                  Correo electrónico
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-envelope-fill"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    id="correo"
                    name="correo"
                    required
                  />
                  <div className="invalid-feedback">
                    Por favor ingresa un correo válido.
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="tipoDocumento" className="form-label">
                    Tipo de documento
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-card-list"></i>
                    </span>
                    <select
                      className="form-select"
                      id="tipoDocumento"
                      name="tipoDocumento"
                      required
                    >
                      <option value="" defaultValue disabled>
                        Selecciona...
                      </option>
                      <option value="CC">Cédula de ciudadanía</option>
                      <option value="CE">Cédula de extranjería</option>
                      <option value="TI">Tarjeta de identidad</option>
                      <option value="PA">Pasaporte</option>
                      <option value="DNI">DNI</option>
                    </select>
                    <div className="invalid-feedback">Selecciona un tipo.</div>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="cedula" className="form-label">
                    Número de documento
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-person-vcard-fill"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="cedula"
                      name="cedula"
                      placeholder="Ingresa cédula"
                      pattern="[A-Za-z0-9\-]{5,20}"
                      required
                    />
                    <div className="invalid-feedback">
                      Ingresa un documento válido.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="celular" className="form-label">
                  Número de celular
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-telephone-fill"></i>
                  </span>
                  <input
                    type="tel"
                    className="form-control"
                    id="celular"
                    name="celular"
                    pattern="[0-9+\s()\-]{7,20}"
                    required
                  />
                  <div className="invalid-feedback">
                    Por favor ingresa un número válido.
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="fechaNacimiento" className="form-label">
                    Fecha de nacimiento
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-calendar-event-fill"></i>
                    </span>
                    <input
                      type="date"
                      className="form-control"
                      id="fechaNacimiento"
                      name="fechaNacimiento"
                      required
                    />
                    <div className="invalid-feedback">
                      Por favor ingresa tu fecha de nacimiento.
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="genero" className="form-label">
                    Género
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-gender-ambiguous"></i>
                    </span>
                    <select
                      className="form-select"
                      id="genero"
                      name="genero"
                      required
                    >
                      <option value="" defaultValue disabled>
                        Selecciona...
                      </option>
                      <option value="femenino">Femenino</option>
                      <option value="masculino">Masculino</option>
                      <option value="otro">Otro</option>
                      <option value="prefiero-no-decir">
                        Prefiero no decir
                      </option>
                    </select>
                    <div className="invalid-feedback">
                      Por favor selecciona una opción.
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="ciudad" className="form-label">
                    Ciudad
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-globe-americas"></i>
                    </span>
                    <select
                      className="form-select"
                      id="ciudad"
                      name="ciudad"
                      required
                    >
                      <option value="" defaultValue disabled>
                        Selecciona...
                      </option>
                      <option value="BOG">Bogotá</option>
                      <option value="ME">Medellín</option>
                      <option value="CA">Cartagena</option>
                      <option value="MA">Manizales</option>
                      <option value="BOY">Boyacá</option>
                    </select>
                    <div className="invalid-feedback">
                      Por favor selecciona tu ciudad.
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="direccion" className="form-label">
                    Dirección
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-geo-alt-fill"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="direccion"
                      name="direccion"
                      required
                    />
                    <div className="invalid-feedback">
                      Por favor ingresa tu dirección.
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-6">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-lock-fill"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      required
                    />
                    <button
                      className="btn btn-outline-secondary toggle-password"
                      type="button"
                      data-target="password"
                    >
                      <i className="bi bi-eye-fill"></i>
                    </button>
                    <div className="invalid-feedback">
                      Mínimo 8 caracteres, 1 mayúscula, 1 minúscula y 1 número.
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirmar contraseña
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-shield-lock-fill"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      required
                    />
                    <button
                      className="btn btn-outline-secondary toggle-password"
                      type="button"
                      data-target="confirmPassword"
                    >
                      <i className="bi bi-eye-fill"></i>
                    </button>
                    <div className="invalid-feedback">
                      Las contraseñas no coinciden.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="terminos"
                  name="terminos"
                  required
                />
                <label className="form-check-label" htmlFor="terminos">
                  Acepto los <a href="#">términos y condiciones</a> y la{" "}
                  <a href="#">política de privacidad</a>.
                </label>
                <div className="invalid-feedback">
                  Debes aceptar los términos para continuar.
                </div>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  <i className="bi bi-person-check-fill me-2"></i>Registrarme
                </button>
              </div>

              <p className="text-center mt-3 mb-0">
                ¿Ya tienes una cuenta? <a href="./login.html">Inicia sesión</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
