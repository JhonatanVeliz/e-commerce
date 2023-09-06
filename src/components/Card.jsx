import React from 'react'
import PropTypes, { string } from 'prop-types'

const Card = ({ src, title, handleCarrito }) => {
  return (
    <article className='card'>

      <img src={ src } alt="imagen de zapatos" />

      <h2> { title } </h2>

      <button
        onClick={handleCarrito}
        className='card__btn'
      >Comprar</button>
    
    </article>
  )
}

Card.propTypes = {
  src  : PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleCarrito: PropTypes.any.isRequired
};

export default Card
