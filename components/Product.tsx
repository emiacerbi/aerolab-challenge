import Image from 'next/image'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'

import { ProductType } from '../types/types'
import { BuyBlue } from './BuyBlue'
import { Coin } from './Coin'
import { ProductOverlay } from './ProductOverlay'

type Props = {
  product: ProductType
}

export const Product = ({ product }: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  const res = useContext(UserContext)
  if (!res) throw new Error('There was a mistake')

  return (
    <article
      className={'relative grid justify-center bg-white p-5 font-body shadow-customShadow duration-300 hover:shadow-2xl'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: `${isHovered ? 'translateY(-5px)' : 'translateY(0)'}`
      }}
    >
      <Image
        src={product.img.url}
        width={256}
        height={187}
        alt={product.name}
      />

      {
        !isHovered && product.cost > res.user.points &&
          (
            <div className='absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-black/50 p-2 px-3 text-neutral-100 duration-200'>
              <p>You need {product.cost - res.user.points} </p>
              <Coin />
            </div>
          )
      }

      {
        product.cost < res.user.points && !isHovered &&
        (
          <div className='absolute top-4 right-4'>
            <BuyBlue />
          </div>
        )
      }

      <hr className="mt-2 mb-4 bg-gray-300 text-primary-font" />
      <h2 className="text-secondary-font">{product.category}</h2>
      <p>{product.name}</p>

      <ProductOverlay productId={product._id} productCost={product.cost} isHovered={isHovered} />
    </article>
  )
}
