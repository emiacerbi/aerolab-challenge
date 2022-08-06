import Image from 'next/image'

import { ProductType } from '../types/types'
import { ProductOverlay } from './ProductOverlay'

type Props = {
  product: ProductType
}

export const Product = ({ product }: Props) => {
  return (
    <article className="relative grid justify-center bg-white p-5 font-body shadow-md  transition-all duration-200 hover:-translate-y-2 hover:shadow-xl">
      <Image
        src={product.img.url}
        width={252}
        height={182}
        alt={product.name}
      />
      <hr className="mt-2 mb-4 bg-gray-300 text-primary-font" />
      <h2 className="text-secondary-font">{product.category}</h2>
      <p>{product.name}</p>

      <ProductOverlay productId={product._id} productCost={product.cost} />
    </article>
  )
}
