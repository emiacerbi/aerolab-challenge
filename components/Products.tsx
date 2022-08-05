import { Product } from './Product'

export type Img = {
  url: string
  hdUrl: string
}

export type ProductType = {
  img: Img
  _id: string
  name: string
  cost: number
  category: string
}

type Props = {
  products: ProductType[]
}

function Products ({ products }: Props) {
  return (
    <main className="">
      <div className="mx-auto max-w-container">

        <section className="grid grid-cols-[276px_276px_276px_276px] justify-center gap-5 py-10">
          {products.map((product) => {
            return <Product product={product} key={product._id} />
          })}
        </section>
      </div>
    </main>
  )
}

export default Products
