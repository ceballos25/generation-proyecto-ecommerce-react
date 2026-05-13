import { useState, useCallback } from "react";

const validateNombre = (value) => {
  const trimmed = value.trim();
  if (!trimmed) return { valid: false, message: "Por favor ingresa tu nombre." };
  if (trimmed.length < 2) return { valid: false, message: "El nombre debe tener al menos 2 caracteres." };
  return { valid: true, message: "" };
};

const validateCorreo = (value) => {
  const trimmed = value.trim();
  if (!trimmed) return { valid: false, message: "Por favor ingresa un correo válido." };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) return { valid: false, message: "Por favor ingresa un correo válido." };
  return { valid: true, message: "" };
};

const validateCelular = (value) => {
  const trimmed = value.trim();
  if (!trimmed) return { valid: false, message: "Por favor ingresa un número válido." };
  const phoneRegex = /^[0-9+\s()-]{7,20}$/;
  if (!phoneRegex.test(trimmed)) return { valid: false, message: "Por favor ingresa un número válido." };
  return { valid: true, message: "" };
};

const validateMensaje = (value) => {
  const trimmed = value.trim();
  if (!trimmed) return { valid: false, message: "Por favor escribe un mensaje." };
  if (trimmed.length < 10) return { valid: false, message: "El mensaje debe tener al menos 10 caracteres." };
  return { valid: true, message: "" };
};

const validators = { nombre: validateNombre, correo: validateCorreo, celular: validateCelular, mensaje: validateMensaje };

const initialValues  = { nombre: "", correo: "", celular: "", mensaje: "" };
const initialTouched = { nombre: false, correo: false, celular: false, mensaje: false };
const initialErrors  = { nombre: "", correo: "", celular: "", mensaje: "" };

const fieldClass = (touched, error) => {
  if (!touched) return "form-control";
  return error ? "form-control is-invalid" : "form-control is-valid";
};

const Contact = () => {
  const [values,     setValues]     = useState(initialValues);
  const [touched,    setTouched]    = useState(initialTouched);
  const [errors,     setErrors]     = useState(initialErrors);
  const [submitting, setSubmitting] = useState(false);

  const validateField = useCallback((name, value) => {
    const result = validators[name](value);
    return result.valid ? "" : result.message;
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({ nombre: true, correo: true, celular: true, mensaje: true });

    const newErrors = {
      nombre:  validateField("nombre",  values.nombre),
      correo:  validateField("correo",  values.correo),
      celular: validateField("celular", values.celular),
      mensaje: validateField("mensaje", values.mensaje),
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some((msg) => msg !== "")) return;

    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xpqkpydy", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          nombre:  values.nombre.trim(),
          correo:  values.correo.trim(),
          celular: values.celular.trim(),
          mensaje: values.mensaje.trim(),
        }),
      });

      if (response.ok) {
        window.Swal?.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
          text: "Nos pondremos en contacto pronto.",
          confirmButtonColor: "#0d6efd",
        });
        setValues(initialValues);
        setTouched(initialTouched);
        setErrors(initialErrors);
      } else {
        const data = await response.json();
        const msg = data?.errors?.[0]?.message || "Error al enviar el formulario.";
        window.Swal?.fire({ icon: "error", title: "Error", text: msg });
      }
    } catch {
      window.Swal?.fire({
        icon: "error",
        title: "Error de red",
        text: "Hubo un problema de red. Intenta de nuevo más tarde.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="mx-auto p-4 border rounded shadow-sm bg-white mt-5"
        style={{ maxWidth: 500 }}
      >
        <h2 className="text-center mb-4">Formulario de Contacto</h2>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-person-fill" /></span>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className={fieldClass(touched.nombre, errors.nombre)}
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
            </div>
          </div>

          <div className="col-md-6">
            <label htmlFor="correo" className="form-label">Correo electrónico</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-envelope-fill" /></span>
              <input
                type="email"
                id="correo"
                name="correo"
                className={fieldClass(touched.correo, errors.correo)}
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.correo && <div className="invalid-feedback">{errors.correo}</div>}
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="celular" className="form-label">Número de celular</label>
          <div className="input-group">
            <span className="input-group-text"><i className="bi bi-telephone-fill" /></span>
            <input
              type="tel"
              id="celular"
              name="celular"
              className={fieldClass(touched.celular, errors.celular)}
              value={values.celular}
              onChange={handleChange}
              onBlur={handleBlur}
              pattern="[0-9+\s()-]{7,20}"
              required
            />
            {errors.celular && <div className="invalid-feedback">{errors.celular}</div>}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje</label>
          <div className="input-group">
            <span className="input-group-text"><i className="bi bi-chat-left-text-fill" /></span>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              className={fieldClass(touched.mensaje, errors.mensaje)}
              value={values.mensaje}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.mensaje && <div className="invalid-feedback">{errors.mensaje}</div>}
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
                Enviando…
              </>
            ) : (
              <>
                <i className="bi bi-send-fill me-2" />
                Enviar
              </>
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;