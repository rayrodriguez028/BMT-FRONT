import Styles from "../Styles/Button.module.css";

const Button = ({ label, onClick, variant, type }) => {
  return (
    <button
      onClick={onClick}
      className={
        variant === "primary"
          ? Styles.button + " " + Styles.buttonPrimary
          : Styles.button + " " + Styles.buttonSecondary
      }
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
