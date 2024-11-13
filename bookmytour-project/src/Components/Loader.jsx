import Styles from "../Styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={Styles.loaderOverlay}>
      <div className={Styles.spinner}></div>
    </div>
  );
};

export default Loader;
