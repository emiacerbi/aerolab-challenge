import Image from 'next/image'
import React from 'react'

export type Img = {
  url: string;
  hdUrl: string;
}

export type ProductType = {
  img: Img;
  _id: string;
  name: string;
  cost: number;
  category: string;
}

type Props = {
  product: ProductType
}

export const Product = ({ product }: Props) => {
  return (
    <article className='grid justify-center bg-white p-5 font-body shadow-md'>
      <Image src={product.img.url} width={252} height={182} alt={product.name} />
      <hr className='mt-2 mb-4 bg-gray-300 text-primary-font' />
      <h2 className='text-secondary-font'>{product.category}</h2>
      <p>{product.name}</p>
    </article>
  )
}
