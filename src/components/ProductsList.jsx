import React, { useContext, useMemo, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { sortProducts } from '../helpers/sortProducts'
import { Product } from './Product'

import arrowLeft from '../assets/icons/arrow-left.svg'
import arrowRight from '../assets/icons/arrow-right.svg'

export const ProductsList = () => {

  const { products } = useContext(UserContext)
  const [selectedFilter, setSelectedFilter] = useState('recent')
  const [page, setPage] = useState(1)

  let firstSlice = page === 1 ? 0 : 16
  let secondSlice = page === 1 ? 16 : 32
  let arrow = page === 1 ? arrowRight : arrowLeft

  const filters = [
    { value: 'recent', name: 'Most recent' },
    { value: 'lowest', name: 'Lowest price' },
    { value: 'highest', name: 'Highest price' }
  ]

  return (
    <>
      <nav className='navbar '>
        <div className="container">
          <p>{products && (page * products.data.length / 2)} of 32 products</p>

          <ul className='navbar__list'>
            Sorty by:
            {
              filters
                .map(filter => {
                  return (
                    <li
                      className={`navbar__list__item ${selectedFilter === filter.value && 'selected'} `}
                      key={filter.value}
                      onClick={() => setSelectedFilter(filter.value)}
                    >
                      {filter.name}
                    </li>
                  )
                })
            }
          </ul>
          <img className='navbar__arrow' alt='arrow-left' src={arrow} onClick={() => setPage(prevPage => prevPage === 1 ? 2 : prevPage - 1)} />

        </div>


      </nav>

      <section className='products-list container animate__animated animate__fadeIn'>
        {
          products ?
            sortProducts(selectedFilter, products.data)
              .slice(firstSlice, secondSlice)
              .map(product => <Product key={product._id} {...product} />) :
            <h2 className='products-list__spinner'>Loading...</h2>
        }
      </section>

      <nav className='navbar bottom'>
        <div className="container">
          <p>{products && (page * products.data.length / 2)} of 32 products</p>
          <img className='navbar__arrow' alt='arrow-left' src={arrow} onClick={() => setPage(prevPage => prevPage === 1 ? 2 : prevPage - 1)} />
        </div>
      </nav>
    </>
  )
}
