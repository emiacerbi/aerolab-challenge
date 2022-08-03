// import React, { useContext } from 'react'
// import { ProductsContext } from '../context/ProductsContext'

import { Product } from './Product'

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
  products: ProductType[]
}

function Products ({ products }: Props) {
  console.log(products)
  return (
    <main className=''>
      <div className='mx-auto max-w-container'>
        {/* <h1>Holis</h1> */}

        <section className='grid grid-cols-[276px_276px_276px_276px] justify-center gap-5 py-10'>
          {
            products.map(product => {
              return (
                <Product product={product} key={product._id} />
              )
            })
          }
        </section>

      </div>

    </main>
  )
}

export default Products
