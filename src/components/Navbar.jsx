import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
const Navbar = ({cart}) => {
  const nav=[
    {Name:"Home",url:"/"},
    {Name:"All Products",url:"/allproducts"},
    {Name:"Mens",url:"/mens"},
    {Name:"Kids",url:"/kids"}
  ]

  const [icon,setIcon]=useState(false)
  function HandleClick(){
    setIcon(!icon)
  }
  return (
    <>
    <div className='flex justify-between h-[70px] items-center border-b border-gray-400 px-5 fixed z-50 w-full max-w-[1530px] mx-auto bg-white'>
      <h1 className='text-3xl font-bold font-sans'>Shop<span className='text-pink-500'>Cart</span></h1>
      <ul className='md:flex hidden gap-[20px] font-semibold text-[17px] '>
        {nav.map((item,key)=>(
        <li  key={key}><Link to={item.url}>{item.Name} </Link></li>
        ))
      }
       
      
      </ul>
      <div className=' items-center gap-5  md:flex'>
        <button className='bg-gray-200 h-[35px] w-[55px] rounded-sm'><Link to="login">Login </Link></button>
        <h1><Link to="cart">
        <button className='mt-[20px]'>
          <FaShoppingCart className='text-2xl'/>
          <span className='text-[15px] '>{cart.length}</span>
        </button></Link></h1>
      </div>
      <div onClick={HandleClick} className='md:hidden'>
       {icon?<RxCross1 />:<GiHamburgerMenu/>}
      </div>
    </div>
    
    {icon && (
  <div
    className={`md:hidden fixed left-0 h-screen w-full top-[70px] bg-pink-500  text-white p-6 z-50 transform transition-transform duration-300 ease-in-out ${
      icon ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    <div className="flex flex-col items-center  justify-center gap-6 mt-20 text-xl w-full">
      {nav.map((item, key) => (
        <h1
        key={key}
          className="hover:scale-110 transition-transform ease-in-out cursor-pointer w-full flex justify-center items-center"
        >
          <Link
          
            to={item.url}
            onClick={() => setIcon(false)} // Close menu on link click
            className="block w-full text-center"
          >
            {item.Name}
          </Link>
        </h1>
      ))}
    </div>
  </div>
)}


    
    </>
  )
}


export default Navbar
