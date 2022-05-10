import React from 'react'

import header from '../assets/header-x2.png'

export const Hero = () => {
  return (
    <div className='hero '>
      <div className='container'>
        <img className='hero__img' src={header} alt='blue headset' />
        <p>Electronics</p>
      </div>
    </div>
  )
}
