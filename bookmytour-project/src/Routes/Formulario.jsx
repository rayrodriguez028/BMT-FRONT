const Formulario =()=>{
    return (
        <>
        <div className="img">
        <img src="\imgForm.png"/>
        </div>
        <div className="titulos ">
        <h1>Crear cuenta</h1>
        <h3>Ya tienes una cuenta ? </h3>
        </div>
        <div className="Form">
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
        

        
        
        
        
        </>
    )
}
export default Formulario