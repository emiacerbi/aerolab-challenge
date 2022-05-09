import React, { useState } from 'react'
import { ProductOverlay } from './ProductOverlay'

export const Product = ({ name, cost, img, category, }) => {

  const [hover, setHover] = useState(false)
  const overlay = hover ? 'shown' : 'hidden'

  return (
    <>
      <article className='product' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
        {
          <div className={`product__overlay ${overlay}`}>
            <ProductOverlay cost={cost} />
          </div>
        }
        <img className='product__img' src={img.url} alt={name} />
        <p className='product__category'>{category}</p>
        <h3 className='product__name'>{name}</h3>
        {/* <p>{cost}</p> */}
      </article>
    </>
  )
}
