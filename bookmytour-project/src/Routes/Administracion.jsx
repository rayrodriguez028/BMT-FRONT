import React from 'react'
import Styles from '../Styles/Administration.module.css'

const Administracion = () => {
  return (
    <>
    <div className={Styles.admin}>
      <h1>Panel de administracion</h1>
      <div className={Styles.button}> 
      <button id={Styles.btn}>Agregar paquetes</button>
      <button id={Styles.btn}>Administrar Clientes</button>
      <button id={Styles.btn}>Administrar Personal </button>
      </div>
    </div>
    {/* para dispositivos moviles  */}
    <div className={Styles.noAvailable}>
    <h2>Contenido no disponible para movil</h2>
  </div>
  </>
   
   
  )
}

export default Administracion