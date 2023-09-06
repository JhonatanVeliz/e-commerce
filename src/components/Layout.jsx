import React, { useState } from 'react';

import Card from "./Card";
import Mustras from './Mustras';

import img1 from '../assets/zapato-1.jpg'
import img2 from '../assets/zapato-2.jpg'
import img3 from '../assets/zapato-3.jpg'

const Layout = () => {

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

  const [ productoActual, setProductoActual ] = useState([productos[0]]);

  const handleCarrito = ()=> console.log('aqui')

  const handleVer = dataProducto => {
    setProductoActual([dataProducto]);
  }

  return (
    <div className='container'>

      <h1 className='title'>Zapatos de estilos</h1>

      <div className="content">
        {
          productoActual.map( producto =>(
            <Card 
              key={producto.id} 
              src={producto.img} 
              title={producto.title} 
              handleCarrito={handleCarrito} />
          ))
        }

        <div className='mostrar__container'>
          {
            productos.map( producto => (
              <Mustras 
                key={producto.id}
                title={producto.title} 
                src={producto.img} 
                handleVer={handleVer} 
                muestraData={producto} />
            ))
          }
        </div>


      </div>
      
    </div>
  )
}

export default Layout
