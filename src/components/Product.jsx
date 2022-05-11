import React, { useContext, useState } from 'react'
import { ProductOverlay } from './ProductOverlay'

import handbag from '../assets/icons/buy-blue.svg'
import coin from '../assets/icons/coin.svg'

import { UserContext } from '../context/UserContext'

export const Product = ({ name, cost, img, category, _id }) => {

  const [hover, setHover] = useState(false)

  const { points } = useContext(UserContext)
  const showHandbag = !hover && <img className='product__icon' src={handbag} alt='product icon' />

  return (
    <>
      <article
        className='product animate__animated animate__fadeIn'
        onMouseLeave={() => setHover(false)}
        onMouseEnter={() => setHover(true)}
      >
        <ProductOverlay hover={hover} cost={cost} _id={_id} />
        {
          !hover && points < cost ?
            <div className='flex product__not-enough'>
              <span>You need {cost}</span>
              <img src={coin} alt="coin" />
            </div> :
            showHandbag
        }
        <img className='product__img' src={img.url} alt={name} />
        <p className='product__category'>{category}</p>
        <h3 className='product__name'>{name}</h3>
      </article>
    </>
  )
}

