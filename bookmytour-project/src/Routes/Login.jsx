import { useEffect, useState } from "react";
import TextInput from "../Components/TextInput";
import Styles from "../Styles/Form.module.css";
import Button from "../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../Components/Loader";
import { useContextGlobalStates } from "../Components/utils/global.context";

const Login = () => {
  const { dispatch } = useContextGlobalStates();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errores, setErrores] = useState({});
  const navigate = useNavigate();
  const { login, loading } = useAuth();

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

  const validateEmail = (email) => {
    const emailRegexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegexp.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password && password.length >= 6;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
      setErrores((prev) => ({
        ...prev,
        email: !validateEmail(value) && "El correo electrónico no es válido",
      }));
    }

    if (name === "password") {
      setPassword(value);
      setErrores((prev) => ({
        ...prev,
        password: !validatePassword(value) && "La contraseña debe tener al menos 6 caracteres",
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateEmail(email) && validatePassword(password)) {
      setError("");

      try {
        const response = await login({
          email: email,
          password: password,
        });
        if (response.token) {
          dispatch({ type: "SET_USER", payload: response });
          toast.success("Sesión iniciada exitosamente!", {
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
          toast.error("Error al iniciar sesión", { position: "top-center" });
        }
      }
    } else {
      setError(
        "Los datos ingresados son incorrectos, asegurese de estar registrado y escribir la contraseña correcta"
      );
    }
  };

  return (
    <div className={Styles.mainFormContainer}>
      {loading && <Loader />}
      <img src="/images/login.png" alt="Login" className={Styles.loginImage} />
      <div className={Styles.formContainer}>
        <ToastContainer />
        <section className={Styles.formHeader}>
          <h1 className={Styles.formTitle}>Iniciar sesión</h1>
          <p style={{ display: "flex", gap: "10px" }}>
            No tienes una cuenta?{" "}
            <Link to="/signup" style={{ color: "#fff", fontWeight: "bold" }}>
              <span>Regístrate</span>
            </Link>
          </p>
          {error && <p className={Styles.error}>{error}</p>}
        </section>
        <form className={Styles.form} onSubmit={handleSubmit}>
          <TextInput
            label="Correo electrónico"
            placeholder="Ingresa tu correo electrónico"
            type="email"
            error={errores.email}
            value={email}
            onChange={handleChange}
            name="email"
          />
          <TextInput
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            type="password"
            value={password}
            error={errores.password}
            onChange={handleChange}
            name="password"
          />
          <Button
            label="Iniciar sesión"
            variant={"secondary"}
            type='submit'
          />
          <span className={Styles.forgotPassword}>
            ¿Olvidaste tu contraseña? <a href=""> Recuperar</a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
