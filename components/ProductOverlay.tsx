import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Coin } from './Coin'

type Props = {
  productId: string
  productCost: number
}

export const ProductOverlay = ({ productId, productCost }: Props) => {
  const res = useContext(UserContext)

  if (!res) throw new Error('There was a mistake')

  return (
    <div className="absolute grid h-full w-full place-content-center bg-overlay opacity-0 transition-all duration-200 hover:opacity-100 ">

      {
        res.user.points >= productCost && (
          <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-center gap-1 text-4xl text-white'>
              <p className='mb-1'>{productCost}</p>
              <Coin />
            </div>

            <button
              disabled={res.isLoading}
              onClick={() => res?.handleRedeemProduct(productId)} className="rounded-full bg-gray-100 px-6 py-2"
            >
              {
                res.isLoading ? 'Wait' : 'Redeem now'
              }
            </button>
          </div>
        )
      }
    </div>
  )
}
