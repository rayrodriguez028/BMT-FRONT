import Styles from '../Styles/Formulario.module.css'


const Formulario =()=>{
    return (
        <>
        <div className={Styles.container}> 
        <div className={Styles.img}>
        <img src="/images/imgForm.png" alt="Imagen Formulario" />
        </div>
        <div className={Styles.titulos }>
        <h1>Crear cuenta</h1>
        <h3>Ya tienes una cuenta ? </h3>
        </div>
        <div className={Styles.form}> 
        <h4>Nombre</h4>
        <input  type="text"  placeholder="Ingresa tu nombre" required />
        <h4>Apellido</h4>
        <input type="text"  placeholder="Ingresa tu apellido" required />
        <h4>Correo electronico</h4>
        <input type="email"  placeholder="Ingresa tu correo electronico" required />
        <h4>Contraseña</h4>
        <input type="password"  placeholder="Ingresa tu contraseña" required />

        <button>Crear cuenta</button>
         </div> 
        

        </div>
        
        
        
        </>
    )
}
export default Formulario