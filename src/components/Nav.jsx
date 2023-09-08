import React, { useEffect, useState } from 'react';

import useLink from "../hooks/useLink";

const Nav = ({ fixed, setFixed }) => {

  const [ _, Title ] = useLink('./', 'Un Café')

  const [ Home ] = useLink('./#home', 'Home');
  const [ About ] = useLink('./#about', 'About');
  const [ Products ] = useLink('./#products', 'Products');

  return (
    <div className='navegacion'>

      <nav className='nav container' >

        <Title />

        <ul className='nav__ul'>

          <Home />
          <About />
          <Products />

        </ul>

      </nav>

    </div>
  )
}

export default Nav