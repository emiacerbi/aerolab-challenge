import { Product } from './Product'
import { ProductType } from '../types/types'
import { useState } from 'react'
import { sortProducts } from '../helpers/sortProducts'

type Props = {
  products: ProductType[]
}

const filters = [
  { id: 1, text: 'Most recent', type: 'recent' },
  { id: 2, text: 'Lowest price', type: 'lowest' },
  { id: 3, text: 'Highest price', type: 'highest' }
]

function Products ({ products }: Props) {
  const [selectedFilter, setSelectedFilter] = useState('recent')

  return (
    <main className="">
      <div className="mx-auto max-w-container">

        <section className='flex items-center gap-2 py-8   text-2xl text-primary-font'>
          <p className='border-r-2 border-gray-300 pr-2'>16 of 32 products</p>
          <div className='flex items-center gap-2'>
            <p className='text-secondary-font'>Sort by:</p>
            {
              filters.map(filter => {
                const background = filter.type === selectedFilter ? 'bg-secondary-bg text-white' : 'bg-gray-200'

                return (
                  <button
                    className={`${background} rounded-full bg-gray-200 py-1 px-5 text-secondary-font transition-colors duration-200 hover:bg-secondary-bg hover:text-white`}
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.type) }
                  >
                    {filter.text}
                  </button>
                )
              })
            }
          </div>
        </section>

        <section className="grid grid-cols-[auto_auto_auto_auto] gap-8 border-t border-gray-300
         py-10">
          {
            sortProducts(products, selectedFilter)
              .map((product) => {
                return <Product product={product} key={product._id} />
              })
          }
        </section>
      </div>
    </main>
  )
}

export default Products
