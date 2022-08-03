import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <div className='mx-auto max-w-screen-2xl'>
      <Image src='/header-x1.png' width={2880} height={960} alt='hero' />
    </div>
  )
}
