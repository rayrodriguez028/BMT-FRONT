import React from 'react'
import Styles from '../Styles/Header.module.css'
import { Link } from 'react-router-dom'
import { routes } from './utils/routes'

const Header = () => {
  return (
    <header id={Styles.header}>
      <nav>
        <ul id={Styles.nav}>
          <Link to={routes.home} className={Styles.leftSection}>
            <img id={Styles.logo} src="public/images/logosobreblanco.svg" alt="Logo-LightMode" />
            <div>
              <h1 id={Styles.mainTitle}><span id={Styles.blueText}>BOOK</span> MY TOUR</h1>
              <h2 id={Styles.slogan}>Keep  calm  and  travel on</h2>
            </div>
          </Link>
          <Link className={Styles.rightSection}>
            <button id={Styles.signUpBtn} className={Styles.headerBtns}>Crear cuenta</button>
            <button id={Styles.loginBtn} className={Styles.headerBtns}>Iniciar sesión</button>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header