import Styles from "../Styles/Form.module.css";

const TextInput = ({ label, type, placeholder, error, value, onChange, name }) => {

  return (
    <div className={Styles.formField}>
        <label className={Styles.formLabel} htmlFor={label}>{label}</label>
      <input
        className={Styles.formInput}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name} 
      />
      {error && <span className={Styles.error}>{error}</span>}
    </div>
  )
}

export default TextInput
