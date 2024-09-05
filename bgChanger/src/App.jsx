import { useState } from 'react'


function App() {
  const [color, setColor] = useState('pink')

  const bgColor = ['red', 'yellow', 'green', 'blue', 'purple', 'orange', 'lightblue', 'brown']


  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}>
        <div className='text-3xl p-8 text-black flex flex-row gap-4 bg-white rounded-lg'>
          {bgColor.map((value) => (
            <button onClick={() => setColor(value)} className='rounded-lg px-2 py-2 border-black' style={{ backgroundColor: value }}>{value}</button>
          ))}
        </div>
      </div>
    </>

  )
}

export default App
