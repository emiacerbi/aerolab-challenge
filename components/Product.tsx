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
    <article>
      <p>{product.name}</p>
      <Image src={product.img.url} width={252} height={182} alt={product.name} />
    </article>
  )
}
