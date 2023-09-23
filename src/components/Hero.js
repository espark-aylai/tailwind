import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh] bg-red-50'>
        <img src="https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" 
        className='w-full h-full object-cover'
        />
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full 
            md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'
            >
                <h1 className='font-bold text-4xl text-black'> Find your special trip</h1>
                <h2 className='text-4xl py-4 italic'>With weekaway</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  </p>
            </div>
            
        </div>
    
    </div>
  )
}

export default Hero