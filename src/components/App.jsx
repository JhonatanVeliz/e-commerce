import React, { useEffect, useState } from 'react';

import Nav from "./Nav";
import Heroe from "./Heroe";
import Presentation from "./Presentation";
import Products from "./Products";
import Footer from "./Footer";
import Buy from './Buy';

const App = () => {

  const [ productsFromCart, setProductsFromCart ] = useState([]);
  const [fixed, setFixed] = useState(false);
  const [priceTotal, setPriceTotal] = useState(0);

  return (
    <>
      <Nav />
      <Heroe />
      <Presentation />
      <Products 
      productsFromCart={productsFromCart}
      setProductsFromCart={setProductsFromCart}
      fixed={fixed} />
      <Buy productsFromCart={productsFromCart} 
           setProductsFromCart={setProductsFromCart} 
           priceTotal={priceTotal}
           setPriceTotal={setPriceTotal}
      />
      <Footer />
    </>
  )
}

export default App