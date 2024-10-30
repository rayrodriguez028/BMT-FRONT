import React from 'react'
import Styles from '../Styles/Card.module.css'
import { Link } from 'react-router-dom'

const Card = ({ id, title, img, price, description }) => {
  return (
    <div className={Styles.container}>
      <Link key={id} to={`detalle/${id}`}>
        <img src={img} alt={img} />
          <h4 className={Styles.title}>{title}</h4>
          <h5>$ {price}</h5>
          <p>{description}</p>
      </Link>
    </div>
  )
}

export default Card