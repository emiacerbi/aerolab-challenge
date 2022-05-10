import React, { useState } from 'react'

import coin from '../assets/icons/coin.svg'
import handbagHover from '../assets/icons/buy-white.svg'
import { addPoints, redeemProduct } from '../api/api'


export const ProductOverlay = ({ cost, hover, _id }) => {

  const overlay = hover ? 'shown' : 'hidden'

  const [loading, setLoading] = useState(false)




  return (
    <div className={`product__overlay ${overlay}`}>
      <img className='product__overlay__icon' src={handbagHover} alt='product icon' />
      <div className='flex'>
        <p className='product__overlay__price' >{cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} </p>
        <img className='product__overlay__coin' src={coin} alt='coin icon' />
      </div>
      <button onClick={() => redeemProduct(_id)} className='product__overlay__btn'>
        {
          loading ? 'Loading' : 'Redeem now'
        }
      </button>
    </div>
  )
}
