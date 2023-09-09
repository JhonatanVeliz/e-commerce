import React from 'react';
import CartItemContent from "./CartItemContent";

const CartItem = ({ productsFromCart, setProductsFromCart }) => {

  return (

    <div className='products__carrito__container-item'>
      {
        productsFromCart.length > 0
          ?
          productsFromCart.map(({ img, title, id }) => (
            <CartItemContent
              key={id}
              img={img}
              title={title}
              id={id}
            />
          ))
          : <p>No hay nada en carrito</p>
      }
    </div>

  )
}

export default CartItem