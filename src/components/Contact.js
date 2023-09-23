import React from 'react'

const Contact = () => {
  return (
    <div id='contacts' className='max-w-[1140px] m-auto w-full p-4'> 
    <h2 className='text-center  text-gray-700'>Send Message</h2>
    <p className='text-center text-gray-700 py-2'>We are standing by</p>

<div className='grid md:grid-col-2'>
    <img src='https://media.istockphoto.com/id/1129113667/photo/got-a-problem-contact-us.jpg?s=612x612&w=0&k=20&c=XY6CdTS4PlkiS2rw_EWmJdg7_fG5o4t28xxL5GU9d0E=' alt="" className='w-full md:h-full object-cover p-2 max-h-[500px] h-200-[px]' />
    <form>
        <div className='grid grid-cols-2 my-10'>
            <input className='border m-2 p-2' type="text"  placeholder='First' />
            <input className='border m-2 p-2' type="text"  placeholder='Last'/>
            <input className='border m-2 p-2' type="email"  placeholder='Email'/>
            <input className='border m-2 p-2' type="tel" placeholder='Phone' />
            <input className='border col-span-2 m-2 p-2' type="text"  placeholder='Adress'/>
            <textarea className='border col-span-2 m-2 p-2' cols="30" rows="10"></textarea>
            <button className='col-span-2 m-2'>Submit</button>
        </div>
    </form>
</div>

    </div>
  )
}

export default Contact