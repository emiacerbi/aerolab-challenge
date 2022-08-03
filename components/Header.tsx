import Image from 'next/image'
import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const Header = () => {
  const res = useContext(UserContext)

  return (
    <header className=''>
      <div className='mx-auto flex max-w-screen-2xl items-center px-6 py-4'>
        <Image src='/icons/aerolab-logo.svg' width={39} height={39} alt='logo' />

        <div className='ml-auto flex gap-3'>
          <p>{res?.user.name}</p>
          <p>{res?.user.points}</p>
        </div>
      </div>
    </header>
  )
}
