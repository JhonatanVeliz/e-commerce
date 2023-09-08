import React from 'react';

import imgPresentation from "../assets/presentation.jpg";

const Presentation = () => {

    return (
        <section className='container presentation' id='about'>

            <article>

                <h2 className='title presentation__title'>Un Café</h2>

                <p className='presentation__p'>
                    " En  Un Café, cada taza es un poema por descubrir. Desde el tostado hasta el último sorbo, te invitamos a una experiencia excepcional. Nuestra pasión es tu taza perfecta. Más que un café, un recuerdo inolvidable. "</p>

                <a href="./#products" className='presentation__link'>Descubrir Sabores</a>

            </article>

            <article className='presentation__img'>

                <div className="presentation__img__slider">

                    <img src={imgPresentation} alt="imagen de presentación" />

                </div>

            </article>

        </section>
    )
}

export default Presentation