import React from 'react'

const CartItemContent = ({ img, title, id, product, deleteProduct }) => {
  return (

    <div className="products__carrito__item">

      <img src={img} alt="producto" className='products__carrito__items__img' />

      <p>{title}</p>

      <div className="products__carrito__item__btns">
        <button className='btn btn--red'
          onClick={()=> deleteProduct(product)}
        >
          Eliminar
        </button>
      </div>

    </div>

  )
}

export default CartItemContent