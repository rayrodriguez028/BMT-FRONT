import { useEffect, useState } from "react";
import Styles from "../Styles/Formulario.module.css";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Loader from "../Components/Loader";

const Formulario = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { register, loading } = useAuth();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Listener para el cambio de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpieza del listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contrasena: "",
  });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validarCampo(name, value);
  };

  const validarCampo = (name, value) => {
    const nuevosErrores = { ...errores };

    if (name === "nombre") {
      if (!value) {
        nuevosErrores.nombre = "El nombre es obligatorio.";
      } else {
        delete nuevosErrores.nombre;
      }
    }

    if (name === "apellido") {
      if (!value) {
        nuevosErrores.apellido = "El apellido es obligatorio.";
      } else {
        delete nuevosErrores.apellido;
      }
    }

    if (name === "correo") {
      if (!value) {
        nuevosErrores.correo = "El correo electrónico es obligatorio.";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        nuevosErrores.correo = "El correo electrónico no es válido.";
      } else {
        delete nuevosErrores.correo;
      }
    }

    if (name === "contrasena") {
      if (!value) {
        nuevosErrores.contrasena = "La contraseña es obligatoria.";
      } else if (value.length < 6) {
        nuevosErrores.contrasena =
          "La contraseña debe tener al menos 6 caracteres.";
      } else {
        delete nuevosErrores.contrasena;
      }
    }

    setErrores(nuevosErrores);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errores).length === 0 && validarFormulario()) {
      console.log("Datos de registro:", formData);
      setErrores("");
      try {
        await register({
          nombre: formData.nombre,
          apellido: formData.apellido,
          correo: formData.correo,
          contrasena: formData.contrasena
        });
        toast.success("Cuenta creada correctamente", {
          position: "top-center",
        });
      } catch (err) {
        console.log(err);
        toast.error("Error al crear la cuenta", {
          position: "top-center",
        });
      }
    }
  };

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!formData.nombre) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }
    if (!formData.apellido) {
      nuevosErrores.apellido = "El apellido es obligatorio.";
    }

    if (!formData.correo) {
      nuevosErrores.correo = "El correo electrónico es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      nuevosErrores.correo = "El correo electrónico no es válido.";
    }

    if (!formData.contrasena) {
      nuevosErrores.contrasena = "La contraseña es obligatoria.";
    } else if (formData.contrasena.length < 6) {
      nuevosErrores.contrasena =
        "La contraseña debe tener al menos 6 caracteres.";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  return (
    <>
      <div className={Styles.container}>
        {loading && <Loader />}
        <ToastContainer />
        {windowWidth < 1100 ? (
          <div className={Styles.formHeader}>
            <div className={Styles.titulos}>
              <h1>Crear cuenta</h1>
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <h3>¿Ya tienes una cuenta?</h3>
                <Link to="/login">
                  <span>Log In</span>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        <img
          src="/images/imgForm.png"
          alt="Imagen Formulario"
          className={Styles.img}
        />
        <div className={Styles.formHeader}>
          {windowWidth > 1100 ? (
            <div className={Styles.titulos}>
              <h1>Crear cuenta</h1>
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <h3>¿Ya tienes una cuenta?</h3>
                <Link to="/login">
                  <span>Log In</span>
                </Link>
              </div>
            </div>
          ) : (
            <></>
          )}
          <form className={Styles.formulario} onSubmit={handleSubmit}>
            <div className={Styles.formGroup}>
              <h4>Nombre</h4>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ingresa tu nombre"
                className={Styles.input}
              />
              {errores.nombre && (
                <span className={Styles.error}>{errores.nombre}</span>
              )}
            </div>

            <div className={Styles.formGroup}>
              <h4>Apellido</h4>
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                placeholder="Ingresa tu apellido"
                className={Styles.input}
              />
              {errores.apellido && (
                <span className={Styles.error}>{errores.apellido}</span>
              )}
            </div>

            <div className={Styles.formGroup}>
              <h4>Correo electrónico</h4>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="Ingresa tu correo electrónico"
                className={Styles.input}
              />
              {errores.correo && (
                <span className={Styles.error}>{errores.correo}</span>
              )}
            </div>

            <div className={Styles.formGroup}>
              <h4>Contraseña</h4>
              <input
                type="password"
                name="contrasena"
                value={formData.contrasena}
                onChange={handleChange}
                placeholder="Ingresa tu contraseña"
                className={Styles.input}
              />
              {errores.contrasena && (
                <span className={Styles.error}>{errores.contrasena}</span>
              )}
            </div>

            <button type="submit" className={Styles.button}>
              Crear cuenta
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Formulario;
