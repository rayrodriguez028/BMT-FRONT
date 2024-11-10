import React, { useEffect, useState } from 'react'
import Styles from '../Styles/Header.module.css'
import { Link } from 'react-router-dom'
import { routes } from './utils/routes'

const Header = () => {
  const [isMenuOpenDesktop, setIsMenuOpenDesktop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const toggleMenuDesktop = () => {
    setIsMenuOpenDesktop(prevState => !prevState);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const closeMenuDesktop = () => {
    setIsMenuOpenDesktop(false);
  };

  useEffect(() => {
    // Función para cerrar el menú móvil al cambiar a vista de escritorio
    const handleResize = () => {
      if (window.innerWidth > 630) {
        setIsMenuOpen(false);
      }
    };

    // Agregar el listener al redimensionar
    window.addEventListener('resize', handleResize);

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header id={Styles.header}>
      <nav>
        <ul id={Styles.nav}>
          {/* Logo y título */}
          <Link to={routes.home} className={Styles.leftSection}>
            <img id={Styles.logo} src="/images/logosobreblanco.svg" alt="Logo-LightMode" />
            <div>
              <h1 id={Styles.mainTitle}><span id={Styles.blueText}>BOOK</span> MY TOUR</h1>
              <h2 id={Styles.slogan}>Keep  calm  and  travel on</h2>
            </div>
          </Link>

           {/* Menú hamburguesa */}
           <div className={Styles.hamburger} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {isLogged ? 
          (
            <>
              <div className={Styles.rightSection}>
                <div style={{display: 'flex', justifyContent:'center', alignItems: 'center',cursor:'pointer'}} onClick={toggleMenuDesktop}>
                  <span style={{fontWeight: "bold", color: "#464646"}}>Admin</span>
                  <img src="/images/Generic avatar.svg" alt="Generic Avatar" />
                </div>
                {/* Menú desplegable que se muestra solo si isMenuOpen es true */}
                {isMenuOpenDesktop && (
                  <div className={Styles.menu}>
                    <p style={{ color: "#61AAC9", cursor: "pointer", fontWeight:'bolder' }} onClick={closeMenuDesktop}>
                      Cerrar sesión
                    </p>
                    <hr />
                    <p style={{ fontWeight: "bold" }}>Menú</p>
                    <hr />
                    <Link to="/productos" onClick={closeMenuDesktop}>Listar productos</Link>
                    <Link to="" onClick={closeMenuDesktop}>Listar usuarios</Link>
                    <Link to="" onClick={closeMenuDesktop}>Listar reservas</Link>       
                  </div>
                )}
              </div>  
            </>
          ) : 
          (
            <div className={Styles.rightSection}>
              <Link to="/signup" id={Styles.signUpBtn} className={Styles.headerBtns}>
                Crear cuenta
              </Link>
              <Link to="/login" id={Styles.loginBtn} className={Styles.headerBtns}>
                Iniciar sesión
              </Link>
            </div>  
          )}


          {/* Menú desplegable (visible en móvil) */}   
          {isLogged ? 
          (
            <div style={{ display: isMenuOpen ? 'flex' : 'none' }}>
              <div className={`${Styles.blurredBackground} ${isMenuOpen ? Styles.blurredBackgroundEnter : Styles.blurredBackgroundExit}`} onClick={closeMenu}></div>
              <div className={`${Styles.dropdownMenu} ${isMenuOpen ? Styles.dropdownMenuEnter : Styles.dropdownMenuExit}`}>
                <h3>Menú</h3>
                <div style={{display: 'flex', justifyContent:'flex-start', alignItems: 'center',cursor:'pointer', padding: "5px 0px 20px 0px", alignSelf:'flex-end', width: "80%"}}>
                  <span style={{marginRight:"30px", color: "#464646", fontWeight: 'bold'}}>Admin</span>
                  <img src="/images/Generic avatar.svg" alt="Generic Avatar" />
                </div>
                <span style={{color:"#61AAC9", fontWeight:'bolder', marginLeft: "30px",  padding: "5px 0px 20px 0px", alignSelf:'flex-end', width: "80%", cursor:'pointer'}} onClick={closeMenu}>
                  Cerrar sesión
                </span>
                <Link to="/productos" onClick={closeMenu}>Listar productos</Link>
                <Link to="" onClick={closeMenu}>Listar usuarios</Link>
                <Link to="" onClick={closeMenu}>Listar reservas</Link>
              </div>
            </div>  
          )  :
          (
            <div style={{ display: isMenuOpen ? 'flex' : 'none' }}>
              <div className={`${Styles.blurredBackground} ${isMenuOpen ? Styles.blurredBackgroundEnter : Styles.blurredBackgroundExit}`} onClick={closeMenu}></div>
              <div className={`${Styles.dropdownMenu} ${isMenuOpen ? Styles.dropdownMenuEnter : Styles.dropdownMenuExit}`}>
                <h3>Menú</h3>
                <Link to="/signup" onClick={closeMenu}>Crear cuenta</Link>
                <Link to="/login" onClick={closeMenu}>Iniciar sesión</Link>
              </div>
            </div>  
          )}      
        </ul>
      </nav>
    </header>
  )
}

export default Header