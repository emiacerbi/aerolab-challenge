import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { sortProducts } from '../helpers/sortProducts'
import { Product } from './Product'

export const ProductsList = () => {

  const { products } = useContext(UserContext)

  const [filters, setFilter] = useState([
    { value: 'recent', name: 'Most recent' },
    { value: 'lowest', name: 'Lowest price' },
    { value: 'highest', name: 'Highest price' }
  ])

  const [selectedFilter, setSelectedFilter] = useState('recent')

  return (
    <>
      <nav className='navbar'>
        <div className="container">
          <p>16 of 32 products</p>

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
        </div>

      </nav>

      <section className='products-list container'>
        <>
          {
            products ?
              sortProducts(selectedFilter, products.data)
                .map(product => <Product key={product._id} {...product} />) :
              <h2>Loading...</h2>
          }
        </>
      </section>
    </>
  )
}
