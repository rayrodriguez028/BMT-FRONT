import React from 'react'
import Styles from '../Styles/Card.module.css'

const Card = ({ title, img, price, description }) => {
  return (
    <div className={Styles.container}>
        <img src={img} alt={img} />
        <h4 className={Styles.title}>{title}</h4>
        <h5>{price}</h5>
        <p>{description}</p>
    </div>
  )
}

export default Card