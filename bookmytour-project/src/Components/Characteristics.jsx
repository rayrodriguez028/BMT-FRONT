import Styles from "../Styles/Detalle.module.css";

const Characteristics = () => {
  const characteristics = [
    {
      title: "Transporte ",
      imageRoute: "/icons/transporte.svg",
    },
    {
      title: "Alimentación",
      imageRoute: "/icons/alimentacion.svg",
    },
    {
      title: "Hospedaje",
      imageRoute: "/icons/hospedaje.svg",
    },
    {
      title: "Souvenir",
      imageRoute: "/icons/souvenir.svg",
    },
    {
      title: "Registro de fotográfico",
      imageRoute: "/icons/fotografia.svg",
    },
    {
      title: "Guia de turismo",
      imageRoute: "/icons/guia.svg",
    },
    {
      title: "Asistencia médica",
      imageRoute: "/icons/medica.svg",
    },
  ];

  return (
    <div className={Styles.characteristics}>
      <h4>Características</h4>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "start",
          gap: "1 rem",
          width: "100%",
        }}
      >
        {characteristics.map((item) => (
          <div
            style={{
              display: "flex",
              gap: "10px",
              height: "fit-content",
              padding: "0 1rem",
            }}
            key={item.title}
          >
            <img
              src={item.imageRoute}
              alt={item.title}
              style={{ width: "24px" }}
            />
            <p style={{ color: "#A8A8AC" }}>{item.title}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Characteristics;
