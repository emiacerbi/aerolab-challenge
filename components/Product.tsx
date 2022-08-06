import Image from 'next/image'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { ProductType } from '../types/types'

type Props = {
  product: ProductType
}

export const Product = ({ product }: Props) => {
  const res = useContext(UserContext)

  return (
    <article className="grid justify-center bg-white p-5 font-body shadow-md">
      <Image
        src={product.img.url}
        width={252}
        height={182}
        alt={product.name}
      />
      <hr className="mt-2 mb-4 bg-gray-300 text-primary-font" />
      <h2 className="text-secondary-font">{product.category}</h2>
      <p>{product.name}</p>

      <button onClick={() => res?.handleRedeemProduct(product._id)} className="bg-red-400">Redeem</button>
    </article>
  )
}
