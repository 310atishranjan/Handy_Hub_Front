import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col w-full h-full bg-gray-600 justify-center items-center text-white mt-2'>
      <div className='mb-4 mt-2'>
        <h1 className='text-center'>WorkForce Hub</h1>
        <p className='text-center'>WorkForce Hub Community, Connecting Talent with Opportunity</p>
    </div>
    <div className='m-4'>
        <input type="text" placeholder='Email' className='text-black text-center mr-3 p-1 rounded-sm'/>
        <button className='bg-white text-black p-1 rounded-md font-medium'>Subscribe</button>
    </div>
    <div className='mb-4'>
        <p className='text-center'>Subscribe NewsLetter for updates and messages</p>
    </div>
    </div>
  )
}

export default Footer; 