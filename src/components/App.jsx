import React, { useState } from 'react';

import Nav from "./Nav";
import Heroe from "./Heroe";
import Presentation from "./Presentation";

import img1 from '../assets/zapato-1.jpg'
import img2 from '../assets/zapato-2.jpg'
import img3 from '../assets/zapato-3.jpg'

const App = () => {

  const [ productos, setProductos ] = useState([
    {
      img : img1,
      title : 'zapato 1',
      id : 123
    },
    {
      img : img2,
      title : 'zapato 2',
      id: 456
    },
    {
      img : img3,
      title : 'zapato 3',
      id : 789
    }
  ])

  return (
    <>
      <Nav />
      <Heroe />
      <Presentation />
    </>
  )
}

export default App