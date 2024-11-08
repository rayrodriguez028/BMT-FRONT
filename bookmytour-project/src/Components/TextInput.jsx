import { useState } from 'react'
import Styles from "../Styles/Form.module.css";

const TextInput = ({ label, type, placeholder, error, onChange }) => {

    const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className={Styles.formField}>
        <label className={Styles.formLabel} htmlFor={label}>{label}</label>
      <input
        className={Styles.formInput}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {error && <span className={Styles.error}>{error}</span>}
    </div>
  )
}

export default TextInput
