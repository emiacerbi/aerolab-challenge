import Image from 'next/image'
import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const Header = () => {
  const res = useContext(UserContext)

  console.log(res)

  return (
    <header className=''>
      <div className='mx-auto flex max-w-container items-center px-6 py-4'>
        <Image src='/icons/aerolab-logo.svg' width={39} height={39} alt='logo' />

        <div className='ml-auto flex gap-3'>
          <p>{res?.user.name}</p>
          <p>
            {
              res?.isLoading ? 'Loading points...' : res?.user.points
            }
          </p>

          <button onClick={() => res?.handleAddPoints(1000)}>
            Add 1000 points
          </button>
        </div>
      </div>
    </header>
  )
}
