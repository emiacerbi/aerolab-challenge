import React, { useContext } from 'react'

import coin from '../assets/icons/coin.svg'
import handbagHover from '../assets/icons/buy-white.svg'
import { UserContext } from '../context/UserContext'
import { Spinner } from './Spinner'
import { SpinnerCircularFixed } from 'spinners-react'


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
          isLoading ? <SpinnerCircularFixed size={30} thickness={100} speed={180} color="rgba(37, 187, 241, 0.89)" secondaryColor="rgba(37, 187, 241, 0.16)" /> :
            'Redeem product'
        }
      </button>
    </div>
  )
}
