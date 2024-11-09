import React, { useEffect, useState } from "react";
import Styles from "../Styles/Body.module.css";
import Card from "../Components/Card.jsx";
import { useContextGlobalStates } from "../Components/utils/global.context.jsx";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Home = () => {
  
  // Configuración del carrusel
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const categories = [
    { 
      "nombre": "Vibra Urbana",
      "img": "/public/images/AmazonasColombiano1.jpg"
    },
    { 
      "nombre": "Paraísos del Caribe",
      "img": "/public/images/AmazonasColombiano1.jpg"
    },
    { 
      "nombre": "Aventura",
      "img": "/public/images/AmazonasColombiano1.jpg"
    },
    { 
      "nombre": "Naturaleza Viva",
      "img": "/public/images/AmazonasColombiano1.jpg"
    },
    { 
      "nombre": "Aromas y Sabores",
      "img": "/public/images/AmazonasColombiano1.jpg"
    }
  ];

  const { state } = useContextGlobalStates();
  const [city, setCity] = useState("");
  const [randomTours, setRandomTours] = useState([]);

  const getRandomIds = (count) => {
    const ids = new Set();
    while (ids.size < count) {
      ids.add(Math.floor(Math.random() * 15) + 1); // IDs del 1 al 15
    }
    return Array.from(ids);
  };

  useEffect(() => {
    const selectedIds = getRandomIds(4);
    const filteredTours = state.data.filter((tour) =>
      selectedIds.includes(tour.id)
    );
    setRandomTours(filteredTours);
  }, [state.data]);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buscar:", city);
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          id={Styles.mainImage}
          src="/images/imagen-marca.png"
          alt="Main-Image"
        />
        <form id={Styles.container} onSubmit={handleSubmit}>
          <input
            type="text"
            value={city}
            onChange={handleChange}
            placeholder="Ingresa la ciudad o región"
            id={Styles.input}
          />
          <button
            id={Styles.btnSubmit}
            className={Styles.btnsForm}
            type="submit"
          >
            Buscar
          </button>
          <button
            type="button"
            id={Styles.btnFilter}
            className={Styles.btnsForm}
          >
            <img
              id={Styles.filterIcon}
              src="/images/filterIcon.svg"
              alt="Filter-Icon"
            />
          </button>
        </form>
      </div>
      <div className={Styles.sectionContainer}>
        <h2>Descubre y agenda experiencias únicas en un solo lugar</h2>
        <p>
          En <b>BookMyTour</b> nos aseguramos que no compres un viaje, sino una
          <b> experiencia de vida</b>. Tenemos la convicción de que al viajar
          creamos las <b>conexiones</b> y los <b>recuerdos</b> más duraderos de
          nuestra vida. Por eso, ofrecemos tours cuidadosamente diseñados que te
          llevarán a explorar lo mejor de cada destino, sumergiéndote en
          culturas locales y <b>aventuras únicas</b>.
        </p>
      </div>
      <div className={Styles.categories}>
        <h2 className={Styles.subtitles}>Categorías</h2>
        <div className="slider-container">
          <Slider {...settings}>
            {categories.map((item) => (
              <Link key={item.nombre} to={`${window.location.origin}/Categorias/${item.nombre}`}>
                <div className={Styles.carouselItem}>
                  <div className={Styles.imageContainer}>
                    <img src={item.img} alt={item.nombre} className={Styles.carouselImage} />
                    <h3 className={Styles.imageText}>{item.nombre}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
        {/* {categories.map((category) => {
          const filteredTours = state.data.filter((tour) =>
            tour.categorias.includes(category)
          );

          // Barajar los tours aleatoriamente
          const randomTours = [...filteredTours]
            .sort(() => Math.random() - 0.5)
            .slice(0, 2);

          return (
            <div key={category}>
              <h3>{category}</h3>
              <div className={Styles.cardsContainer}>
                {randomTours.map((tour) => (
                  <Card
                    id={tour.id}
                    key={tour.id}
                    title={tour.nombre}
                    img={tour.imagenes[0]}
                    price={tour.precio}
                    description={tour.resumen}
                  />
                ))}
              </div>
            </div>
          );
        })} */}
      </div>
      <div className={Styles.recommendations}>
        <h2 className={Styles.subtitles}>Recomendaciones</h2>
        <div className={Styles.cardsContainer}>
          {randomTours.map((tour) => (
            <Card
              id={tour.id}
              key={tour.id}
              title={tour.nombre}
              img={tour.imagenes[0]}
              price={tour.precio}
              description={tour.resumen}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
