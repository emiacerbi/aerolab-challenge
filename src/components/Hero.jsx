import React from 'react'

import headerx1 from '../assets/header-x1.png'
import headerx2 from '../assets/header-x2.png'

export const Hero = () => {
  return (
    <div className='hero '>
      <div className='container'>
        <picture className='hero__img'  >
          <source media="(max-width: 799px)" srcSet={headerx1} />
          <source media="(min-width: 2000px)" srcSet={headerx2} />
          <img src={headerx1} alt='blue headset' />
        </picture>
        <p>Electronics</p>
      </div>
    </div>
  )
}
