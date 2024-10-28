//import React from 'react'
import Styles from '../Styles/Administration.module.css'

const Administracion = () => {
  return (
    <>
    <div className={Styles.admin}>
      <h1>¡Bienvenido a tu perfil de administrador!</h1>
      <div className={Styles.button}> 
        <div className={Styles.square}>
          <h3>Productos </h3>
        <button id={Styles.btn}>Listar productos</button>
        </div>
      <div className={Styles.square}>
        <h3>Usuarios </h3>
      <button id={Styles.btn}>Listar usuarios</button>
      </div>
      <div className={Styles.square}>
        <h3>Reservas </h3>
      <button id={Styles.btn}>Listar reservas  </button>
      </div>
      
      </div>
    </div>
    {/* para dispositivos moviles cd */}
    <div className={Styles.noAvailable}>
    <h2>Contenido no disponible para movil</h2>
  </div>
  </>
   
   
  )
}

export default Administracion