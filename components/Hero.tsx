// import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <div className='relative mx-auto max-w-container'>
      {/* <Image src='/header-x1.png' width={2880} height={960} alt='hero' /> */}
      <div className='h-[412px] max-w-[1440px] bg-hero bg-cover bg-right-top bg-no-repeat'>
        <h1 className='absolute left-24 bottom-10 text-[64px] font-bold text-white '>Electronics</h1>
      </div>
    </div>
  )
}
