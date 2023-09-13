import React, { useEffect } from 'react';

import BuyItem from "./BuyItem";

const Buy = ({ allProducts, setAllProducts, priceTotal, setPriceTotal }) => {

  const deleteProduct = product =>{
    const productsUpdate = allProducts.filter( eachProduct => 
      eachProduct.id != product.id
    );

    setAllProducts(productsUpdate);
  }

  useEffect(()=>{
    let total = 0;
    allProducts.forEach( ({ price }) => {
      total += price;
    });

    setPriceTotal(total);
  }, [allProducts])

  return (
    <section className='container buy' id='buy'>
      <h2 className='title products__title'>Compras</h2>

      <div className="buy__content">

        <div className="buy__items-container">
            {
                allProducts.map( product => (
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
              ? <button className='btn buy__pay__btn'>Comprar</button> 
              : null
            }
        </div>

      </div>

    </section>
  )
}

export default Buy
