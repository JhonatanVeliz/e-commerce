import React, { useState } from 'react';
import carrito from "../assets/cart.png";
import CartItem from "./CartItem";

const Cart = ({ productsFromCart, setProductsFromCart }) => {

    const [appearCar, setAppearCar] = useState(false);

    const handleClickCart = () => setAppearCar(!appearCar);   
    
    return (
        <div className="products__carrito">

            <div className="products__carrito__button">

                <button className='btn btn--cart' onClick={handleClickCart}>
                    <img src={carrito} alt="icono del carrito" />
                </button>

                <span className='products__carrito__button__cantidad'>
                    {productsFromCart.length || 0}
                </span>
            </div>

            { appearCar && 
                <CartItem productsFromCart={productsFromCart} 
                  setProductsFromCart={setProductsFromCart} 
                /> 
            }
            
        </div>
    )
}

export default Cart