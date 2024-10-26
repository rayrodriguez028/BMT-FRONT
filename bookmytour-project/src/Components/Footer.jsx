import { Link } from 'react-router-dom';
import { routes } from './utils/routes'
import StylesFooter from '../Styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={StylesFooter.footerBookMyTour}>
            <section className={StylesFooter.sectionFooter1}>
              <Link to={routes.home} className={StylesFooter.contenedorLogo}>
                <img className={StylesFooter.logo} src="public/images/logosobreblanco.svg" alt="Logo-LightMode" />
                <div>
                  <h1 className={StylesFooter.mainTitle}><span className={StylesFooter.blueText}>BOOK</span> MY TOUR</h1>
                  <h2 className={StylesFooter.slogan}>Keep  calm  and  travel on</h2>
                </div>
              </Link>
            </section>
            <section className={StylesFooter.sectionFooter2}>
              <p>Sobre nosotros</p>
              <p>Politica de privacidad</p>
              <p>Contáctacnos</p>
            </section>
            <section className={StylesFooter.sectionFooter3}>
              <h4>Siguenos</h4>
              <div className={StylesFooter.ContendorRedes}>
                <Link className={StylesFooter.buttonRedSocial}>X</Link>
                <Link className={StylesFooter.buttonRedSocial}>X</Link>
                <Link className={StylesFooter.buttonRedSocial}>X</Link>
                <Link className={StylesFooter.buttonRedSocial}>0</Link>
              </div>
            </section>
        </footer>
    );
}

export default Footer