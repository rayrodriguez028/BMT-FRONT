import React, { useState } from 'react'
import Styles from '../Styles/Header.module.css'
import { Link } from 'react-router-dom'
import { routes } from './utils/routes'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  
  };

  return (
    <header id={Styles.header}>
      <nav>
        <ul id={Styles.nav}>
          {/* Logo y título */}
          <Link to={routes.home} className={Styles.leftSection}>
            <img id={Styles.logo} src="../../public/images/logosobreblanco.svg" alt="Logo-LightMode" />
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

          {/* Enlaces de sesión (visible en pantallas grandes) */}
          <div className={Styles.rightSection}>
            <Link to="" id={Styles.signUpBtn} className={Styles.headerBtns}>
              Crear cuenta
            </Link>
            <Link to="" id={Styles.loginBtn} className={Styles.headerBtns}>
              Iniciar sesión
            </Link>
          </div>

          {/* Menú desplegable (visible en móvil) */}       
          <div style={{ display: isMenuOpen ? 'flex' : 'none' }}>
            <div className={`${Styles.blurredBackground} ${isMenuOpen ? Styles.blurredBackgroundEnter : Styles.blurredBackgroundExit}`} onClick={closeMenu}></div>
            <div className={`${Styles.dropdownMenu} ${isMenuOpen ? Styles.dropdownMenuEnter : Styles.dropdownMenuExit}`}>
              <h3>Menú</h3>
              <Link to="" onClick={closeMenu}>Crear cuenta</Link>
              <Link to="" onClick={closeMenu}>Iniciar sesión</Link>
            </div>
          </div>          
        </ul>
      </nav>
    </header>
  )
}

export default Header