import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Faq from './component/Faq'

function App() {
  const questions = [{
    id:1,
    title: "is this a good product?",
    answer: "yes it a good product vxygqucgiuojn no newjoifjouhvygcuvd jfrejfouhydgyegfoij[oejcnc"
  }, {
    id:2,
    title: "how to use this product?",
    answer: "apply this product twice a day in morning and at night to see the visible results"
  }]


  return (
    <div className='flex flex-col justify-center items-center '>
    <div className='w-3/4 h-screen flex flex-col justify-center items-center text-lg font-mono bg-blue-300 m-0 p-0 border-transparent rounded-xl'>
      <h1 className=' pb-5 font-bold capitalize text-3xl '> Frequently Asked Questions </h1>
      <div className='w-1/2 flex flex-col gap-4'>
      {questions.map((value)=>(
        <Faq key={value.id} question={value}/>
      ))
        
      }
    
      </div>
    </div>
    </div>
  )
}

export default App
