import React from 'react'
import { SpinnerCircularFixed } from 'spinners-react';

export const Spinner = () => {
  return (
    <>
      <SpinnerCircularFixed className='spinner' size={100} thickness={100} speed={180} color="rgba(255, 136, 0, 1)" secondaryColor="rgba(255, 136, 0, 0.24)" />
    </>
  )
}
