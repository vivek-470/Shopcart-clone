import React from "react";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="h-full bg-black flex flex-col  w-full max-w-[1537px] mx-auto">
     <div className="md:py-24 py-10 text-white w-full max-w-[1520px] mx-auto  flex md:flex-row gap-9 md:gap-0 flex-col  justify-between px-5 h-full">

        
      {/* 1st div */}
      <div className="text-white font-bold text-2xl">
        Shop<span className="text-pink-500">Cart</span>
        
      </div>
      {/* 2nd div */}
      <div >
        <h1 className="font-semibold text-2xl ">Menu</h1>
        <ul className="md:mt-5 mt-1 ml-1 flex flex-col gap-1">
            <li>Features</li>
            <li>Info Center</li>
            <li>News Blog</li>
            <li>Login</li>
        </ul>

      </div>
      {/* 3rd div */}
      <div>
        <h1 className="text-xl font-medium">COMPANY</h1>
        <ul className="md:mt-5 ml-1 mt-1 flex flex-col gap-1">
            <li>About us</li>
            <li>Privacy Policy</li>
            <li>Term & Condition</li>
            <li>Login</li>
        </ul>

      </div>
      {/* 4th div */}
      <div>
        <h1 className="text-xl font-medium">Contact</h1>
        <ul className="md:mt-5 ml-1 mt-1 flex flex-col gap-1">
            <li>Contact Sales</li>
            <li>+123456789</li>
            <li>News Blog</li>
            <li>+254669763</li>
        </ul>

      </div>
      {/* 5th div */}
      <div>
      <h1 className="text-xl font-medium">Tech Support</h1>
        <ul className="md:mt-5 ml-1 mt-1 flex flex-col gap-1">
            <li>Contact Support</li>
            <li>Info Center</li>
            <li>Activate</li>
            
        </ul>

      </div>
     
      </div>
      <div className=" h-[60px] text-white flex items-center px-4 gap-3">
      
      <h1 className="flex items-center"><FaRegCopyright />2024 MechShop  </h1>
      <h1 className="flex items-center"><FaRegCopyright/>Copyright</h1>
      
      </div>
      
    </div>
  );
};

export default Footer;
