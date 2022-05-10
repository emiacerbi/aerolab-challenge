import React, { useState } from 'react'
import { ProductOverlay } from './ProductOverlay'

import handbag from '../assets/icons/buy-blue.svg'
import handbagHover from '../assets/icons/buy-white.svg'

export const Product = ({ name, cost, img, category, _id }) => {

  const [hover, setHover] = useState(false)

  const handbagIcon = hover ? handbagHover : handbag


  return (
    <>
      <article
        className='product'
        onMouseLeave={() => setHover(false)}
        onMouseEnter={() => setHover(true)}
      >
        <ProductOverlay hover={hover} cost={cost} _id={_id} />
        {
          !hover &&
          <img className='product__icon' src={handbag} alt='product icon' />
        }
        <img className='product__img' src={img.url} alt={name} />
        <p className='product__category'>{category}</p>
        <h3 className='product__name'>{name}</h3>
        {/* <p>{cost}</p> */}
      </article>
    </>
  )
}

