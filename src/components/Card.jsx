import React, {useState} from 'react'

const Card = ({img, title, price }) => {

  const [quantity, setQuantity] = useState(0);

  const handleQuantity = () => {
    setQuantity( eachQuantity => eachQuantity + 1);
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
        <p className='card__footer__quantity'>{ quantity }</p>
        <button className='card__btn card__btn--brown'
          onClick={handleQuantity}
        >Agregar
        </button>
      </div>

    </div>
  )
}

export default Card