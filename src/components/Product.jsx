import React, { useState } from 'react'
import { ProductOverlay } from './ProductOverlay'

export const Product = ({ name, cost, img, category, }) => {

  const [hover, setHover] = useState(false)

  return (
    <>
      <article
        className='product'
        onMouseLeave={() => setHover(false)}
        onMouseEnter={() => setHover(true)}
      >
        <ProductOverlay hover={hover} cost={cost} />
        <img className='product__img' src={img.url} alt={name} />
        <p className='product__category'>{category}</p>
        <h3 className='product__name'>{name}</h3>
        {/* <p>{cost}</p> */}
      </article>
    </>
  )
}

