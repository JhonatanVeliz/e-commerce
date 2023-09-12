import React, {useState} from 'react'

const Card = ({img, title, price, id, addProductCart }) => {

  const handleAddProduct = () => {
    addProductCart({ img, title, price });
  }

  return (
    <div className="card">

      <img src={ img } alt="taza de café" className='card__img' />

      <div>
        <p className="card__text">
          <span className='card__text__title'>{ title }</span>
          <span className='card__text__price'>{`Q${price}.00`}</span>
        </p>
      </div>

      <div className="card__footer">
        <button className='card__btn card__btn--black'
          onClick={handleAddProduct}
        >Agregar
        </button>
      </div>

    </div>
  )
}

export default Card