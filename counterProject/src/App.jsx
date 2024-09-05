import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter<20){
      console.log(counter)
      setCounter(counter+1)
      console.log(counter)
      // setCounter(prevCounter=>prevCounter+1)
      // console.log(counter)
    }  
  }

  const decreaseValue=()=>{
    if(counter>0)
    setCounter(counter - 1)
  }

  return (
    <div>
      <h1>chai aur react </h1>
      <h3>counter value :{counter}</h3>
      <button onClick={addValue}>Add value </button>
      <br />
      <br />
      <button onClick={decreaseValue}>decrease value</button>
    </div>
  )
}

export default App
