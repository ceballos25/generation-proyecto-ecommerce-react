import useContact from "../hooks/useContact";

const fieldClass = (touched, error) => {
    if (!touched) return "form-control";
    return error ? "form-control is-invalid" : "form-control is-valid";
};

const Contact = () => {
    const { values, touched, errors, submitting, handleChange, handleBlur, handleSubmit } = useContact();

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