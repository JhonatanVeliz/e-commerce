import React, { useState } from 'react';

import Card from "./Card.jsx";
import Cart from "./Cart.jsx";
import { getApi } from "../helpers/index.js";

import taza_1 from "../assets/taza-1.jpg";
import taza_2 from "../assets/taza-2.jpg";
import taza_3 from "../assets/taza-3.jpg";
import taza_4 from "../assets/taza-4.jpg";

const initialState = [
    {
        img : taza_1, 
        title: 'café vainilla', 
        price: 15,
        id: 123
    },
    {
        img : taza_2, 
        title: 'café ciruela', 
        price: 15,
        id: 345
    },
    {
        img : taza_3, 
        title: 'café express', 
        price: 15,
        id: 678
    },
    {
        img : taza_4, 
        title: 'café ice cream', 
        price: 15,
        id: 910
    }
]

const Products = ({ setAllProducts }) => {

  const [ products, setProducts ] = useState(initialState);
  const [ get, setGet ] = useState(false);

  const [ productsFromCart, setProductsFromCart ] = useState([]);

  const getProductos = async ()=>{

    try {
        if(!get){
            const productos = await getApi('http://localhost:5173/db.json');
            setProducts(productos.products);
            setGet(true)
        }
    } catch (error) {console.error(error);}
  }

  return (
    <section className='container section products' id='products'>

        <header className="products__header">
            <h2 className='title products__title'>Productos</h2>

            <Cart productsFromCart={productsFromCart} 
                  setProductsFromCart={setProductsFromCart}
            />
        </header>

        <div className="products__cards">
            {
                products.map( producto =>(
                    <Card key={producto.id}
                          img={producto.img}
                          title={producto.title}
                          price={producto.price}
                    />
                ))
            }
        </div>

        <div className="products__mas">
            <button className='btn--mas'
             onClick={ getProductos }
             >Ver Más
            </button>
        </div>

    </section>
  )
}

export default Products