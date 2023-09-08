import React, { useState } from 'react';

import Nav from "./Nav";
import Heroe from "./Heroe";
import Presentation from "./Presentation";
import Products from "./Products";
import Footer from "./Footer";

const App = () => {

  const [allProducts, setAllProducts] = useState([]);
  const [fixed, setFixed] = useState(false);

  return (
    <>
      <Nav />
      <Heroe />
      <Presentation />
      <Products setAllProducts={setAllProducts} fixed={fixed} />
      <Footer />
    </>
  )
}

export default App