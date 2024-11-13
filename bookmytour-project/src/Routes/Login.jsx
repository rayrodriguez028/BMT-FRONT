import { useState } from "react";
import TextInput from "../Components/TextInput";
import Styles from "../Styles/Form.module.css";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../Components/Loader";

const Login = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading } = useAuth();

  const validateEmail = (email) => {
    const emailRegexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegexp.test(String(email).toLowerCase());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateEmail(email) && password) {
      setError("");

      try {
        await login({
          email: email,
          password: password,
        });
        toast.success("Sesión iniciada correctamente", {
          position: "top-center",
        });
      } catch (err) {
        console.log(err);
        toast.error("Error al iniciar sesión", {
          position: "top-center",
        });
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
        <form className={Styles.form}>
          <TextInput
            label="Correo electrónico"
            placeholder="Ingresa tu correo electrónico"
            type="email"
            error={
              email.length >= 1 &&
              !validateEmail(email) &&
              "El correo ingresado no es válido"
            }
            onChange={setEmail}
          />
          <TextInput
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            type="password"
            error={
              password.length >= 1 &&
              password.length < 6 &&
              "Contraseña demasiado corta"
            }
            onChange={setPassword}
          />
          <Button
            label="Iniciar sesión"
            variant={"secondary"}
            onClick={handleSubmit}
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
