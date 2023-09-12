import React from 'react';

import BuyItem from "./BuyItem";

const Buy = ({ allProducts, setAllProducts }) => {
  return (
    <section className='container buy'>
      <h2 className='title products__title'>Compras</h2>

      <div className="buy__content">

        <div className="buy__items-container">
            {
                allProducts.map( product => (
                    <BuyItem key={product.id} product={product} />
                ))
            }
        </div>

      </div>

    </section>
  )
}

export default Buy
