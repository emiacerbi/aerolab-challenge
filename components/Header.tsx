import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { BounceLoader } from 'react-spinners'
import { UserContext } from '../context/UserContext'
import { Coin } from './Coin'
import { Modal } from './Modal'

export const Header = () => {
  const res = useContext(UserContext)

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <header >
      <div className='relative mx-auto flex max-w-container items-center px-6 py-4 text-2xl'>
        <Image src='/icons/aerolab-logo.svg' width={39} height={39} alt='logo' />

        <div className='ml-auto flex items-center gap-5 '>
          <p className='mb-[2px]'>{res?.user.name}</p>
          <div className='flex cursor-pointer gap-3 rounded-full bg-gray-200 py-1 px-3 transition-colors duration-200 hover:bg-gray-300' onClick={() => setIsModalOpen(!isModalOpen)}>
            <div className='mt-[1px] flex items-center' >
              {
                res?.isLoading
                  ? (
                    <div className='px-3'>
                      <BounceLoader color='#ff7800' size={28} />
                    </div>
                  )
                  : res?.user.points
              }
            </div>
            <Coin />
          </div>

        </div>
        <Modal isModalOpen={isModalOpen} />
      </div>

    </header>
  )
}
