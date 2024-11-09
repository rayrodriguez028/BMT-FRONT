import { useState } from 'react';
import Styles from '../Styles/Formulario.module.css';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
  });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!formData.nombre) {
      nuevosErrores.nombre = 'El nombre es obligatorio.';
    }
    if (!formData.apellido) {
      nuevosErrores.apellido = 'El apellido es obligatorio.';
    }

    if (!formData.correo) {
      nuevosErrores.correo = 'El correo electrónico es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      nuevosErrores.correo = 'El correo electrónico no es válido.';
    }

    if (!formData.contrasena) {
      nuevosErrores.contrasena = 'La contraseña es obligatoria.';
    } else if (formData.contrasena.length < 6) {
      nuevosErrores.contrasena = 'La contraseña debe tener al menos 6 caracteres.';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      console.log('Datos de registro:', formData);
      // Aquí puedes agregar lógica para enviar los datos a un servidor
    }
  };

  return (
    <>
      <div className={Styles.container}>
        <img src="/images/imgForm.png" alt="Imagen Formulario" className={Styles.img} />
        <div className={Styles.formHeader}>
          <div className={Styles.titulos}>
            <h1>Crear cuenta</h1>
            <h3>¿Ya tienes una cuenta?</h3>
          </div>
          <form className={Styles.formulario} onSubmit={handleSubmit}>
            <h4>Nombre</h4>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ingresa tu nombre"
              required
            />
            {errores.nombre && <span style={{ color: 'red' }}>{errores.nombre}</span>}

            <h4>Apellido</h4>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              placeholder="Ingresa tu apellido"
              required
            />
            {errores.apellido && <span style={{ color: 'red' }}>{errores.apellido}</span>}

            <h4>Correo electrónico</h4>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="Ingresa tu correo electrónico"
              required
            />
            {errores.correo && <span style={{ color: 'red' }}>{errores.correo}</span>}

            <h4>Contraseña</h4>
            <input
              type="password"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleChange}
              placeholder="Ingresa tu contraseña"
              required
            />
            {errores.contrasena && <span style={{ color: 'red' }}>{errores.contrasena}</span>}

            <button type="submit">Crear cuenta</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Formulario;
