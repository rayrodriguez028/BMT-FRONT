import { useEffect, useState } from "react";
import Styles from "../Styles/Formulario.module.css";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Loader from "../Components/Loader";
import { useContextGlobalStates } from "../Components/utils/global.context";

const Formulario = () => {
  const { dispatch } = useContextGlobalStates();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { register, loading } = useAuth();
  const navigate = useNavigate();

  // Verifica si ya hay un usuario en el localStorage
  useEffect(() => {
    const user = localStorage.getItem("user");  
    if (user) {
      dispatch({
        type: "SET_USER",
        payload: JSON.parse(user), 
      });
      navigate("/"); 
    }
  }, [dispatch, navigate]);


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
<<<<<<< HEAD
      } else if((!/^[a-zA-Z\u00C0-\u017F\s]+$/.test(value))){
        nuevosErrores.nombre = " El nombre solo debe contener letras"
      }
       else {
=======
      } else if (!/^[a-zA-Z]+$/.test(value)) {
        nuevosErrores.nombre = " El nombre solo debe contener letras";
      } else {
>>>>>>> 176cfc69664904fc886c291e4b20182a4266fd6b
        delete nuevosErrores.nombre;
      }
    }

    if (name === "apellido") {
      if (!value) {
        nuevosErrores.apellido = "El apellido es obligatorio.";
<<<<<<< HEAD
      } else if((!/^[a-zA-Z\u00C0-\u017F\s]+$/.test(value))){
        nuevosErrores.apellido = " El apellido solo debe contener letras"
      }
      else {
=======
      } else if (!/^[a-zA-Z]+$/.test(value)) {
        nuevosErrores.apellido = " El apellido solo debe contener letras";
      } else {
>>>>>>> 176cfc69664904fc886c291e4b20182a4266fd6b
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
      try {
        const response = await register({
          firstName: formData.nombre,
          lastName: formData.apellido,
          email: formData.correo,
          password: formData.contrasena,
        });

<<<<<<< HEAD
        if (response.ok) {
          const data = await response.json();
          toast.success('Registro exitoso: ' + JSON.stringify(data));
          setFormData({ nombre: '', apellido: '', correo: '', contrasena: '' });
          setErrores({});
        } else {
          const errorData = await response.json();
          toast.error('Error: ' + (errorData.message || 'Error en el registro'));
        }
      } catch (error) {
        toast.error('Error de red: ' + error.message);
=======
        if (response.token) {
          dispatch({ type: "SET_USER", payload: response });
          toast.success("Cuenta creada exitosamente!", {
            position: "top-center",
          });
          setTimeout(() => {
            navigate("/"); // Redirigir a la página principal después de crear la cuenta
          }, 1000);
        }
      } catch (err) {
        if (err.response && err.response.data && err.response.data.error) {
          toast.error(err.response.data.error, { position: "top-center" });
        } else {
          console.log(err);
          toast.error("Error al crear la cuenta", { position: "top-center" });
        }
>>>>>>> 176cfc69664904fc886c291e4b20182a4266fd6b
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
