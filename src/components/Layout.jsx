import React from 'react'

const Layout = () => {
  return (
    <>
    <div className='md:h-screen h-[500px]  relative md:py-[70px] py-[70px] w-full max-w-[1520px] mx-auto'>
      <img className='md:h-screen  h-[500px] w-full max-w-[1520px] mx-auto ' src="https://res.cloudinary.com/dzmfopf1b/image/upload/v1745745738/Banner_opz35l.jpg" alt="" />
    </div>
    <div className='absolute gap-5 top-0 mt-[150px] ml-[-50px] md:mt-[300px] md:ml-[20px] w-[360px] md:w-[550px] flex flex-col  items-center'>
      <h1 className='md:text-4xl text-[17px] font-bold text-pink-600 hidden lg:block'>Discover Your Next Adventure!</h1>
      <h1 className='font-semibold text-[15px] md:text-xl hidden lg:block'>Shop Our latest Arrival </h1>
    </div>
    </>
  )
}

export default Layout
