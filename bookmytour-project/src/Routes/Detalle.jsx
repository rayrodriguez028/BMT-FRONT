import React, { useEffect, useState } from "react";
import Styles from "../Styles/Detalle.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useContextGlobalStates } from "../Components/utils/global.context";
import Slider from "react-slick";

const Detail = () => {
  const { id } = useParams();
  const { state } = useContextGlobalStates();
  const navigate = useNavigate();
  const [zoomImage, setZoomImage] = useState(null);

  // Filtrar el tour específico según el ID
  const tour = state.data.find((tour) => tour.id === parseInt(id));

  if (!tour) {
    return <div style={{ height: "100vh" }}>Tour no encontrado</div>; // Mensaje si el tour no se encuentra
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
    <div className={Styles.mainContainer}>
      <div style={{ marginTop: "120px" }}>
        <button onClick={() => navigate(-1)} className={Styles.btnRegresar}>
          <img src="../../public/images/Arrow left.svg" alt="" />
          Regresar
        </button>
      </div>

      <div className={Styles.container}>
        <div className={Styles.mainImage}>
          <img src={tour.imagenes[0]} alt={tour.imagenes[0]} />
          <div className={Styles.littleCard}>
            <h3>{tour.nombre}</h3>
            <p>
              {tour.card}
            </p>
            <button>¡Agenda ahora!</button>
          </div>
        </div>
        <div className={Styles.tourContainer}>
          <div className={Styles.tourInfo}>
            <Slider {...settings}>
              {tour.imagenes.map(
                (image, index) =>
                  index != 0 && ( //Omitimos la primera imagen
                    <div key={index} className={Styles.imageWrapper}>
                      <img
                        className={Styles.carouselImage}
                        src={image}
                        alt={`Imagen del tour ${tour.nombre}`}
                        onClick={() => setZoomImage(image)}
                      />
                    </div>
                  )
              )}
            </Slider>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <h4>{tour.nombre}</h4>
              <h5>$ {tour.precio}</h5>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <span style={{ textAlign: "left" }}>{tour.ubicacion}</span>
              <span style={{ textAlign: "center" }}>{tour.duracion}</span>
            </div>
          </div>
          <div id={Styles.description}>
            <p>{tour.descripcion}</p>
          </div>
        </div>

        {zoomImage && (
          <div className={Styles.lightbox} onClick={() => setZoomImage(null)}>
            <img src={zoomImage} alt="Zoom" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
