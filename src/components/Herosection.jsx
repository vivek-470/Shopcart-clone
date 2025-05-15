import React from "react";
import { FaTruck } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { TfiTruck } from "react-icons/tfi";
import { FaRegCreditCard } from "react-icons/fa";
const Herosection = () => {
  return (
    <div className="text-white h-[200px] md:mt-[70px] mt-[100px]  flex justify-center items-center gap-8 flex-wrap">
      <div className="flex  gap-1">
        <div className="bg-pink-500 w-[190px] h-[75px] flex justify-center items-center flex-col rounded-[5px]">
          <FaTruck className="text-2xl" />
          <p>FREE SHIPPING</p>
        </div>
        <div className="bg-pink-500 w-[190px] h-[75px] flex justify-center items-center flex-col rounded-[5px]">
          <FaShoppingCart className="text-2xl" />
          <p>AUTHENTIC PRODUCTS</p>
        </div>
        </div>
    
       <div className="flex gap-1">
        <div className="bg-pink-500 w-[190px] h-[75px] flex justify-center items-center flex-col rounded-[5px]">
          <TfiTruck className="text-2xl" />
          <p>EASY RETURN</p>
        </div>
        <div className="bg-pink-500 w-[190px] text-white h-[75px] flex justify-center items-center flex-col rounded-[5px]">
          <FaRegCreditCard className="text-2xl" />
          <p>SECURE PAYMENT</p>
        </div>
       </div>
     
    </div>
  );
};

export default Herosection;
