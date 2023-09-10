import React from 'react';
import CartItemContent from "./CartItemContent";

const CartItem = ({ productsFromCart, setProductsFromCart }) => {

  const deleteProduct = product => {
    const productsUpdate = 
    productsFromCart.filter(eachProduct => eachProduct.id !== product.id);

    setProductsFromCart(productsUpdate);
  }

  return (

    <div className='products__carrito__container-item'>
      {
        productsFromCart.length > 0
          ?
          productsFromCart.map(product => (
            <CartItemContent
              key={product.id}
              img={product.img}
              title={product.title}
              id={product.id}
              product={product}
              deleteProduct={deleteProduct}
            />
          ))
          : <p>No hay nada en carrito</p>
      }
    </div>

  )
}

export default CartItem