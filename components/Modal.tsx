import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Coin } from './Coin'

type Props = {
  isModalOpen: boolean
}

export const Modal = ({ isModalOpen }: Props) => {
  const res = useContext(UserContext)

  const position = isModalOpen ? 'scale-100' : 'scale-0'

  return (
    <div className={`absolute top-[5.5rem] right-[.875rem] z-10 flex flex-col items-center gap-3 rounded-lg bg-primary-bg py-3 px-7 shadow-md ${position} transition-transform duration-200`}>
      <p>Add points!</p>
      <ul className='flex gap-5'>
        <li>
          <button
            className='flex cursor-pointer gap-1 rounded-full bg-gray-200 p-2 pt-3 pl-3 hover:bg-gray-300 disabled:cursor-auto'
            onClick={() => res?.handleAddPoints(1000)}
            disabled={res?.isLoading}
          >
            1000 <Coin />
          </button>
        </li>
        <li>
          <button
            className='flex cursor-pointer gap-1 rounded-full bg-gray-200 p-2 pt-3 pl-3 hover:bg-gray-300 disabled:cursor-auto'
            onClick={() => res?.handleAddPoints(5000)}
            disabled={res?.isLoading}
          >
            5000 <Coin />
          </button>
        </li>
        <li>
          <button
            className='flex cursor-pointer gap-1 rounded-full bg-gray-200 p-2 pt-3 pl-3 hover:bg-gray-300 disabled:cursor-auto'
            onClick={() => res?.handleAddPoints(7500)}
            disabled={res?.isLoading}
          >
            7500 <Coin />
          </button>
        </li>
      </ul>
    </div>
  )
}
