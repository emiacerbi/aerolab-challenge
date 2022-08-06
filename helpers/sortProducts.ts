import { ProductType } from '../types/types'

export const sortProducts = (products: ProductType[], filter: string) => {
  if (filter === 'lowest') return products.sort((a, b) => a.cost - b.cost)
  if (filter === 'highest') return products.sort((a, b) => b.cost - a.cost)
  return products.sort((a, b) => a._id > b._id ? 1 : -1)
}
