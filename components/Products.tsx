import { useState } from 'react'
import { Product } from './Product'
import { ProductType } from '../types/types'
import { sortProducts } from '../helpers/sortProducts'
import { ArrowRight } from './ArrowRight'
import { ArrowLeft } from './ArrowLeft'

type Props = {
  products: ProductType[]
}

const filters = [
  { id: 1, text: 'Most recent', type: 'recent' },
  { id: 2, text: 'Lowest price', type: 'lowest' },
  { id: 3, text: 'Highest price', type: 'highest' }
]

function Products ({ products }: Props) {
  const [selectedFilter, setSelectedFilter] = useState<string>('recent')
  const [page, setPage] = useState<number>(1)

  const handlePageChange = () => {
    setPage(prevPage => prevPage === 2 ? 1 : prevPage + 1)
  }

  const firstPageSlice = page === 1 ? 0 : 16
  const secondPageSlice = page === 1 ? 16 : 32
  const arrow = page === 1 ? <ArrowRight /> : <ArrowLeft />

  return (
    <main>
      <div className="mx-auto max-w-container">

        <section className='flex flex-col items-center justify-start gap-3 px-6 py-8 text-2xl text-primary-font md:flex-row 2xl:px-0'>
          <p className='lg: border-b-2 border-gray-300 pb-2  md:border-b-0 md:border-r-2 md:pb-0 md:pr-3'>{page * 16} of 32 products</p>
          <div className='flex flex-col items-center gap-3 md:flex-row'>
            <p className='text-secondary-font'>Sort by:</p>

            {
              filters.map(filter => {
                const background = filter.type === selectedFilter ? 'bg-secondary-bg text-white' : 'bg-gray-200 text-secondary-font'

                return (
                  <button
                    className={`rounded-full py-2 px-5 transition-colors duration-200 hover:bg-secondary-bg hover:text-white ${background}`}
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.type) }
                  >
                    {filter.text}
                  </button>
                )
              })
            }

          </div>
          <div className='cursor-pointer md:ml-auto' onClick={handlePageChange}>
            {arrow}
          </div>
        </section>

        <section
          className="grid grid-cols-[auto] gap-8 border-t border-gray-200 py-8 md:grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto] xl:grid-cols-[auto_auto_auto_auto]"
        >
          {
            sortProducts(products, selectedFilter)
              .slice(firstPageSlice, secondPageSlice)
              .map((product) => {
                return <Product product={product} key={product._id} />
              })
          }
        </section>

        <section className='mb-16 flex items-center border-b-2 border-gray-200 px-6 py-8 text-2xl text-primary-font'>
          <p className=' pr-2 '>{page * 16} of 32 products</p>
          <div className='ml-auto cursor-pointer' onClick={handlePageChange}>
            {arrow}
          </div>
        </section>

      </div>
    </main>
  )
}

export default Products
