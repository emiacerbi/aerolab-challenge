import React, { useContext } from 'react'

import coin from '../assets/icons/coin.svg'
import handbagHover from '../assets/icons/buy-white.svg'
import { UserContext } from '../context/UserContext'
import { Spinner } from './Spinner'


export const ProductOverlay = ({ cost, hover, _id }) => {

  const overlay = hover ? 'shown' : 'hidden'

  const { handleRedeem, isLoading } = useContext(UserContext)

  return (
    <div className={`product__overlay ${overlay}`}>
      <img className='product__overlay__icon' src={handbagHover} alt='product icon' />
      <div className='flex'>
        <p className='product__overlay__price' >{cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} </p>
        <img className='product__overlay__coin' src={coin} alt='coin icon' />
      </div>
      <button onClick={() => handleRedeem(_id)} className='product__overlay__btn'>
        {
          isLoading ? <Spinner color="rgba(57, 111, 172, 0.78)" size={30} /> : 'Redeem product'
        }
      </button>
    </div>
  )
}
