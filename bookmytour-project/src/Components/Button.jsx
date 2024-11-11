import Styles from "../Styles/Button.module.css";

const Button = ({ label, onClick, variant }) => {
  return (
    <button
      onClick={onClick}
      className={
        variant === "primary"
          ? Styles.button + " " + Styles.buttonPrimary
          : Styles.button + " " + Styles.buttonSecondary
      }
    >
      {label}
    </button>
  );
};

export default Button;
