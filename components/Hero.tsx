// import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <div className='relative mx-auto max-w-container'>
      {/* <Image src='/header-x1.png' width={2880} height={960} alt='hero' /> */}
      <div className='h-[412px] w-[1440px] bg-hero bg-cover bg-right-top bg-no-repeat'>
        <h1 className='absolute bottom-0 '>Holis</h1>
      </div>
    </div>
  )
}
