import React, { useState } from 'react'
import Styles from '../Styles/Body.module.css'

const Home = () => {
  const [city, setCity] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Buscar:', city);
  }

  return (
    <div style={{height: '100vh'}}>
      <img id={Styles.mainImage} src='public/images/espacioParaImagenPrincipal.png' alt='Main-Image'/>
      <form id={Styles.container} onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={handleChange} placeholder="Ingresa la ciudad o región" id={Styles.input}/>
        <button id={Styles.btnSubmit} className={Styles.btnsForm} type='submit'>Buscar</button>
        <button type='button' id={Styles.btnFilter} className={Styles.btnsForm}>
          <img id={Styles.filterIcon} src='public/images/filterIcon.svg' alt='Filter-Icon' />
        </button>
      </form>
    </div>
  )
}

export default Home