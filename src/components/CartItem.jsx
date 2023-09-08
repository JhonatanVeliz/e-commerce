import React from 'react';

import taza_1 from "../assets/taza-1.jpg";

const CartItem = ({ productsFromCart, setProductsFromCart }) => {
    return (

        <>
            {
                productsFromCart.length > 1
                ? 
                productsFromCart.map( ({img, title}) => (
                    <div className="products__carrito__container-item">
        
                        <div className="products__carrito__item">
        
                            <img src={img} alt="producto" className='products__carrito__items__img' />
        
                            <p>{ title }</p>
        
                            <div className="products__carrito__item__btns">
                                <button className='btn btn--blue'>+1</button>
                                <button className='btn btn--orange'>-1</button>
                                <button className='btn btn--red'>Eliminar</button>
                            </div>
        
                        </div>
        
                    </div>
                ))
                :
                <div className="products__carrito__container-item">
                    <p>No hay nada en carrito</p>
                </div>
            }
        </>

    )
}

export default CartItem