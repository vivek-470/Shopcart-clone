import React from 'react'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx'
import Kids from './components/Kids.jsx';
import Mens from './components/Mens.jsx'
import Allproducts from './components/Allproducts.jsx'
import Cart from './components/Cart.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import { useState } from 'react';

const App = () => {
  const [cart,setCart]=useState([]);
  const handleRemove=(id)=>{
    const removeItem=cart.filter((filterItem)=>filterItem.id!==id)
    setCart(removeItem)
  }
  const handleInc=(id)=>{
    const addQuanity=cart.map((item)=>(
      item.id===id?{...item,quantity:item.quantity+1}:item
    ))
    setCart(addQuanity)

  }
  const handleDec=(id)=>{
    const subQuanity=cart.map((item)=>(
      item.id===id && item.quantity > 1 ? {...item,quantity:item.quantity-1}:item
    ))
    setCart(subQuanity)

  }
  const Addtocart=(product)=>{
    const isProductExist=cart.find((item)=>item.id===product.id)
    if(isProductExist){
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart)
    }
   else{

     setCart([...cart,{...product,quantity:1}])
   }
   console.log(cart)

  }
  const getTotalprice =()=>{
   const totalPrice = cart.reduce((total, item) => {
    return total + item.discountPercentage * item.quantity;
    }, 0)
     return totalPrice
}
  const total=()=>{
  return getTotalprice()+10
   }
  
  
  return (
    <div>
      <BrowserRouter>
        <Navbar cart={cart}/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/kids" element={<Kids/>} />
        <Route path="/mens" element={<Mens/>} />
        <Route path="/allproducts" element={<Allproducts Addtocart={Addtocart}/>} />
        <Route path="/cart" element={<Cart cart={cart} handleDec={handleDec} handleInc={handleInc} handleRemove={handleRemove} getTotalprice={getTotalprice} total={total}/> } />
        <Route path="/login" element={<Login/>} />
        <Route path="signup" element={<Signup/>}/>
       </Routes>
     <Footer/>
     </BrowserRouter>
      
    </div>
  )
}

export default App
