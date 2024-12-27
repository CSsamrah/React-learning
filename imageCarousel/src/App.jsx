import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carousel from './components/Carousel'

function App() {
 

  return (
    <><h1 className='text-center text-slate-950 text-3xl p-0 mt-0 pt-0 font-semibold font-mono'>Image Carousel</h1>

    <div className='w-full h-screen flex flex-col justify-center items-center '>
     <Carousel/>
    </div></>
  )
}

export default App
