import React, { useEffect } from 'react'
import Styles from '../Styles/Detalle.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useContextGlobalStates } from '../Components/utils/global.context';
import Slider from 'react-slick';

const Detail = () => {
  const { id } = useParams();
  const { state } = useContextGlobalStates();
  const navigate = useNavigate();

  // Filtrar el tour específico según el ID
  const tour = state.data.find(tour => tour.id === parseInt(id));

  if (!tour) {
    return <div>Tour no encontrado</div>; // Mensaje si el tour no se encuentra
  }

  // Configuración del carrusel
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    waitForAnimate: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div style={{height:"100vh"}}>
      <div className={Styles.container}>
        <div className={Styles.mainImage}>
          <img src={tour.imagenes[0]} alt={tour.imagenes[0]} />
          <div className={Styles.littleCard}>
            <h3>VIAJE A SANTA MARTA</h3>
            <p>Long-term rental of villas with 
            a guarantee of conformity with photographs</p>
            <button>AGENDAR</button>
          </div>
        </div>
        <div className={Styles.tourContainer}>
          <div className={Styles.tourInfo}>
            <Slider {...settings}> 
              {tour.imagenes.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Imagen del tour ${tour.nombre}`} />
                </div>
              ))}
            </Slider> 
            <div style={{display:'flex', alignItems:'center', marginTop: "15px"}}>
              <h4>{tour.nombre}</h4>
              <h5>$ {tour.precio}</h5>
            </div>
            <div style={{display:'flex', alignItems:'center', marginTop:"10px"}}>
              <span style={{textAlign:'left'}}>{tour.ubicacion}</span>
              <span style={{textAlign:'center'}}>{tour.duracion}</span>
            </div>
          </div>
          <div style={{padding: "0px 15px 0px 15px"}}>
            <p>{tour.descripcion}</p>
          </div>
          <div style={{padding: "0px 30px 0px 0px", marginTop: "40px"}}>
            <button onClick={() => navigate(-1)} className={Styles.btnRegresar}>
              <img src="../../public/images/Arrow left.svg" alt="" />
              Regresar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail