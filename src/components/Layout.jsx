import React from 'react'

const Layout = () => {
  return (
    <>
    <div className='h-screen  relative py-[70px] w-full max-w-[1520px] mx-auto'>
      <img className='h-screen w-full max-w-[1520px] mx-auto' src="https://res.cloudinary.com/dzmfopf1b/image/upload/v1745745738/Banner_opz35l.jpg" alt="" />
    </div>
    <div className='absolute gap-5 top-0 mt-[280px]  md:mt-[300px] md:ml-[20px] w-[360px] md:w-[550px] flex flex-col  items-center'>
      <h1 className='md:text-4xl text-2xl font-bold text-pink-600'>Discover Your Next Adventure!</h1>
      <h1 className='font-semibold md:text-xl'>Shop Our latest Arrival & Unleash Your Style</h1>
    </div>
    </>
  )
}

export default Layout
