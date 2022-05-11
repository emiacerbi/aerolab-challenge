import React, { useContext, useEffect, useState } from 'react'

import { UserContext } from '../context/UserContext'
import { SpinnerCircularFixed } from 'spinners-react'

import coin from '../assets/icons/coin.svg'
import handbagHover from '../assets/icons/buy-white.svg'

export const ProductOverlay = ({ cost, hover, _id }) => {

  const overlay = hover ? 'shown' : 'hidden'

  const { points, handleRedeem, isLoading } = useContext(UserContext)

  return (
    <div className={`product__overlay ${overlay}`}>
      {
        points >= cost &&
        <>
          <img className='product__overlay__icon' src={handbagHover} alt='product icon' />
          <div className='flex'>
            <p className='product__overlay__price' >{cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} </p>
            <img className='product__overlay__coin' src={coin} alt='coin icon' />
          </div>
          <button onClick={() => handleRedeem(_id)} className='product__overlay__btn' disabled={isLoading}>
            {
              isLoading ? <SpinnerCircularFixed size={30} thickness={100} speed={180} color="rgba(37, 187, 241, 0.89)" secondaryColor="rgba(37, 187, 241, 0.16)" /> :
                'Redeem now'
            }
          </button>
        </>
      }
    </div>
  )
}
