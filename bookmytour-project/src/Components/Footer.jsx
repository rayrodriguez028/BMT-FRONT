import { Link } from 'react-router-dom';
import { routes } from './utils/routes'
import StylesFooter from '../Styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={StylesFooter.footerBookMyTour}>
            <section className={StylesFooter.sectionFooter1}>
              <Link to={routes.home} className={StylesFooter.contenedorLogo}>
                <img className={StylesFooter.logo} src="../../public/images/logosobreblanco.svg" alt="Logo-LightMode" />
                <div>
                  <h1 className={StylesFooter.mainTitle}><span className={StylesFooter.blueText}>BOOK</span> MY TOUR</h1>
                  <h2 className={StylesFooter.slogan}>Keep  calm  and  travel on</h2>
                  <h2 className={StylesFooter.sloganCopyright}>2024 @copyright</h2>  
                </div>
              </Link>
            </section>
            <section className={StylesFooter.sectionFooter2}>
              <p>Sobre nosotros</p>
              <p>Politica de privacidad</p>
              <p>Contáctanos</p>
            </section>
            <section className={StylesFooter.sectionFooter3}>
              <div className={StylesFooter.contenedorRedes}>
                <h4>Síguenos</h4>
                <nav>
                  <ul>
                    <li className={StylesFooter.buttonRedSocial}>
                      <img src="../../public/images/espacioImagenRedesSociales.png" alt="" />
                    </li>
                    <li className={StylesFooter.buttonRedSocial}>
                      <img src="../../public/images/espacioImagenRedesSociales.png" alt="" />
                    </li>
                    <li className={StylesFooter.buttonRedSocial}>
                      <img src="../../public/images/espacioImagenRedesSociales.png" alt="" />
                    </li>
                    <li className={StylesFooter.buttonRedSocial}>
                      <img src="../../public/images/espacioImagenRedesSociales.png" alt="" />
                    </li>
                  </ul>
                </nav>
              </div>
            </section>
        </footer>
    );
}

export default Footer