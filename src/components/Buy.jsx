import React, { useEffect } from 'react';

import BuyItem from "./BuyItem";

const Buy = ({ productsFromCart, setProductsFromCart, priceTotal, setPriceTotal }) => {

  const deleteProduct = product =>{
    const productsUpdate = productsFromCart.filter( eachProduct => 
      eachProduct.id != product.id
    );

    setProductsFromCart(productsUpdate);
  }

  const deleteProductAll = () => {
      setProductsFromCart([]);
  };

  useEffect(()=>{
    let total = 0;
    productsFromCart.forEach( ({ price }) => {
      total += price;
    });

    setPriceTotal(total);
  }, [productsFromCart])

  return (
    <section className='container buy' id='buy'>
      <h2 className='title products__title'>Compras</h2>

      <div className="buy__content">

        <div className="buy__items-container">
            {
                productsFromCart.map( product => (
                    <BuyItem 
                      key={product.id} 
                      product={product} 
                      deleteProduct={deleteProduct}
                    />
                ))
            }
        </div>

        <div className="buy__pay">
            <p>Q { priceTotal }.00</p>
            {
              priceTotal != 0 
              ? <button className='btn buy__pay__btn'
                  onClick={deleteProductAll}
                  >Comprar
                </button> 
              : null
            }
        </div>

      </div>

    </section>
  )
}

export default Buy