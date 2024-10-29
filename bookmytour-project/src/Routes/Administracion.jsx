//import React from 'react'
import Styles from '../Styles/Administration.module.css'

const Administracion = () => {
  return (
    <>
    <div className={Styles.admin}>
      <h1>¡Bienvenido a tu perfil de administrador!</h1>
      <div className={Styles.button}> 
        <div className={Styles.square}>
          <h3>PRODUCTOS </h3>
        <button id={Styles.btn}>Listar productos</button>
        </div>
      <div className={Styles.square}>
        <h3>USUARIO </h3>
      <button id={Styles.btn}>Listar usuarios</button>
      </div>
      <div className={Styles.square}>
        <h3>RESERVAS </h3>
      <button id={Styles.btn}>Listar reservas</button>
      </div>
      
      </div>
    </div>
    {/* para dispositivos moviles cd */}
    <div className={Styles.noAvailable}>
      <h2>La configuración no está disponible para dispositivos móviles, por favor cambia de dispositivo si deseas acceder a esta funcionalidad</h2>
    </div>
  </>
   
   
  )
}

export default Administracion