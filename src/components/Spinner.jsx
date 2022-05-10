import React from 'react'
import { SpinnerCircularFixed } from 'spinners-react';

export const Spinner = ({ color, size }) => {
  return (
    <>
      <SpinnerCircularFixed className='spinner' size={size} thickness={140} speed={190} color={color} secondaryColor="rgba(172, 90, 57, 0.5)" />
    </>
  )
}
