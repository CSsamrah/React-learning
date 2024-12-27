import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carousel from './components/Carousel'

function App() {
 

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center '>
     <Carousel/>
    </div>
  )
}

export default App
