import React from 'react'
import { useState } from 'react'

function Carousel() {
    const[initialImage,setImage]=useState(0)
    const imagesArray=["https://images.pexels.com/photos/29851712/pexels-photo-29851712/free-photo-of-mint-chocolate-chip-ice-cream-in-a-black-bowl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load","https://images.pexels.com/photos/19319997/pexels-photo-19319997/free-photo-of-carousel-and-mulled-wine-sign-in-christmas-market-in-dresden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load","https://images.pexels.com/photos/29875437/pexels-photo-29875437/free-photo-of-two-women-enjoying-winter-outdoors-with-luggage-cart.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"]
  return (
    
<div className=' border rounded-lg border-black flex flex-col justify-center items-center'>
    <button
    type='button'
    className='border rounded-2xl bg-blue-500 text-white absolute right-1 z-10 cursor-pointer p-4'
     onClick={()=>setImage(initialImage===imagesArray.length-1?0:initialImage+1)}>next</button>
     <button
    type='button'
    className='border rounded-2xl bg-blue-500 text-white absolute left-0 z-10 cursor-pointer p-4 '
     onClick={()=>setImage(initialImage===0?imagesArray.length-1:initialImage-1)}>prev</button>
     {imagesArray.map((image,index)=>
        initialImage===index && (
<div key={index}className='w-80 '>
    <img className='w-full h-full ' src={image}></img>
</div>
        )
     )}
 


</div>
    
  )
}

export default Carousel
