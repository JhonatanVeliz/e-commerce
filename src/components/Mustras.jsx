import React from 'react'

const Mustras = ({ title, src, handleVer, muestraData }) => {
  return (
    <article className='muestra'>

      <img className='muestra__img' src={ src } alt="imagen de zapatos" />

      <h2> { title } </h2>

      <button
        className='muestra__btn'
        onClick={ () => handleVer(muestraData)}
      >Ver producto</button>
    
    </article>
  )
}

export default Mustras
