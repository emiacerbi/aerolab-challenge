import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import Products from '../components/Products'
import { ProductType } from '../types/types'
import { Toaster } from 'react-hot-toast'

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!products) throw new Error('There was something wrong')
  return (
    <>
      <Head>
        <title>Aerolab Challenge</title>
        <meta name="aerolab challenge" content="My submission for the challenge" />
        <link rel="icon" href="/aerolab-logo.svg" />
      </Head>

      <div className='bg-primary-bg font-body text-gray-700'>
        <Toaster />
        <Header />
        <Hero />
        <Products products={products} />
      </div>
    </>
  )
}

export default Home

const BASE_URL = process.env.NEXT_PUBLIC_PRODUCTS_URL
const TOKEN = process.env.NEXT_PUBLIC_TOKEN

const options = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${TOKEN}`
  }
}

export async function getStaticProps () {
  const response = await fetch(BASE_URL!, options)
  const products: ProductType[] = await response.json()

  return {
    props: {
      products
    }
  }
}
