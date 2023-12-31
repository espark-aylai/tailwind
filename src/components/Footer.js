import React from 'react'
import {BsChatSquareDots} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='max-w-[1140px] w-full py-8 m-auto '>
    <div>
        <BsChatSquareDots size={30} className='text-[var(--primary-dark)] mr-2'/>
        <h1 className='text-xl text-center font-bold text-gray-700'> WEEKAWAY</h1>
    </div>
    </div>
  )
}

export default Footer