import { useContext } from 'react'
import { BounceLoader } from 'react-spinners'
import { UserContext } from '../context/UserContext'
import { BuyWhite } from './BuyWhite'
import { Coin } from './Coin'

type Props = {
  productId: string
  productCost: number
  isHovered: boolean
}

export const ProductOverlay = ({ productId, productCost, isHovered }: Props) => {
  const res = useContext(UserContext)

  if (!res) throw new Error('There was a mistake')

  return (
    <div className="absolute grid h-full w-full place-content-center bg-overlay opacity-0 duration-200 hover:opacity-100  ">
      {
        isHovered && productCost < res.user.points &&
        (
          <div className='absolute top-3 right-3'>
            <BuyWhite />
          </div>
        )
      }

      {
        res.user.points >= productCost && (
          <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-center gap-1 text-5xl text-white'>
              <p className=''>{productCost}</p>
              <Coin />
            </div>

            <button
              disabled={res.isLoading}
              onClick={() => res?.handleRedeemProduct(productId)} className="flex w-56 justify-center rounded-full bg-gray-200 py-2 transition-colors duration-200 hover:bg-gray-300"
            >
              {
                res.isLoading
                  ? <BounceLoader color='#ff7800' size={25} />
                  : 'Redeem now'
              }
            </button>
          </div>
        )
      }
    </div>
  )
}
