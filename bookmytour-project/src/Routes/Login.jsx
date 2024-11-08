import { useState } from "react";
import TextInput from "../Components/TextInput";
import Styles from "../Styles/Form.module.css";
import Button from "../Components/Button";

const Login = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const emailRegexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegexp.test(String(email).toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateEmail(email) && password) {
      console.log("Login!");
      setError("");
    } else {
      setError(
        "Los datos ingresados son incorrectos, asegurese de estar registrado y escribir la contraseña correcta"
      );
    }
  };

  return (
    <div className={Styles.mainFormContainer}>
      <img src="/images/login.png" alt="Login" className={Styles.loginImage} />
      <div className={Styles.formContainer}>
        <section className={Styles.formHeader}>
          <h1 className={Styles.formTitle}>Iniciar sesión</h1>
          <p>
            No tienes una cuenta? <a href="">Registrate</a>
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
