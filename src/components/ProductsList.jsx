import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Product } from './Product'

export const ProductsList = () => {

  const { products } = useContext(UserContext)

  return (
    <>
      <nav className='navbar'>
        <div className="container">
          <p>16 of 32 products</p>

          <ul className='navbar__list'>
            Sorty by:
            <li>Most recent</li>
            <li>Lowest price</li>
            <li>Highest price</li>
          </ul>
        </div>

      </nav>

      <section className='products-list container'>
        <>
          {
            products ?
              products.data
                .map(product => <Product key={product._id} {...product} />) :
              <h2>Loading...</h2>
          }
        </>
      </section>
    </>
  )
}
