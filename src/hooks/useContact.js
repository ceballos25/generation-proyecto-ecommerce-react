import { useState, useCallback } from "react";
import Swal from "sweetalert2";

// ─── Validadores ──────────────────────────────────────────────────────────────

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

const validators = {
    nombre: validateNombre,
    correo: validateCorreo,
    celular: validateCelular,
    mensaje: validateMensaje,
};

// ─── Estado inicial ───────────────────────────────────────────────────────────

const initialValues = { nombre: "", correo: "", celular: "", mensaje: "" };
const initialTouched = { nombre: false, correo: false, celular: false, mensaje: false };
const initialErrors = { nombre: "", correo: "", celular: "", mensaje: "" };

// ─── Hook ─────────────────────────────────────────────────────────────────────

const useContact = () => {
    const [values, setValues] = useState(initialValues);
    const [touched, setTouched] = useState(initialTouched);
    const [errors, setErrors] = useState(initialErrors);
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

    const resetForm = () => {
        setValues(initialValues);
        setTouched(initialTouched);
        setErrors(initialErrors);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setTouched({ nombre: true, correo: true, celular: true, mensaje: true });

        const newErrors = {
            nombre: validateField("nombre", values.nombre),
            correo: validateField("correo", values.correo),
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
                    nombre: values.nombre.trim(),
                    correo: values.correo.trim(),
                    celular: values.celular.trim(),
                    mensaje: values.mensaje.trim(),
                }),
            });

            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    title: "¡Mensaje enviado!",
                    text: "Nos pondremos en contacto pronto.",
                    confirmButtonColor: "#0d6efd",
                });
                resetForm();
            } else {
                const data = await response.json();
                const msg = data?.errors?.[0]?.message || "Error al enviar el formulario.";
                Swal.fire({ icon: "error", title: "Error", text: msg });
            }
        } catch {
            Swal.fire({
                icon: "error",
                title: "Error de red",
                text: "Hubo un problema de red. Intenta de nuevo más tarde.",
            });
        } finally {
            setSubmitting(false);
        }
    };

    return { values, touched, errors, submitting, handleChange, handleBlur, handleSubmit };
};

export default useContact;