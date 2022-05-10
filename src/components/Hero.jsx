import React from 'react'

import header from '../assets/header-x2.png'

export const Hero = () => {
  return (
    <div className='hero animate__animated animate__fadeIn'>
      <div className='container'>
        <img className='hero__img' src={header} alt='blue headset' />
      </div>
    </div>
  )
}
