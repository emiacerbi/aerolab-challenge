import React from 'react'

import coin from '../assets/icons/coin.svg'

export const ProductOverlay = ({ cost, hover }) => {

  const overlay = hover ? 'shown' : 'hidden'

  return (
    <div className={`product__overlay ${overlay}`}>
      <div className='flex'>
        <p className='product__overlay__price' >{cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} </p>
        <img src={coin} alt='coin icon' />
      </div>
      <button className='product__overlay__btn'>Redeem now</button>
    </div>
  )
}
