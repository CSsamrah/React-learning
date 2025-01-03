import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([])
  const [inputValue, setInput]=useState("")
  const addItem = (item) => {
    if (item.trim() === "") return;
    setCart((prevCart)=>[...prevCart,item])
    setInput("")
  }
  const deleteItem = (value) => {
    setCart((prevCart)=>prevCart.filter((item)=>item!==value))

  }

  return (
    < div className='flex flex-col justify-center items-center'>
      
      <div className='w-2/3 h-screen border rounded-xl flex flex-col justify-center items-center bg-pink-600  '>
      <h1 className='text-center font-mono font-bold text-4xl pb-6'>Shopping List</h1>
        <form
          className='flex flex-row gap-2'
          onSubmit={(e) => {
            e.preventDefault();
            addItem(inputValue)
          }}>
          <input
          value={inputValue}
          placeholder='Enter Item'
          onChange={(e)=>setInput(e.target.value)}
            className='rounded p-2 text-xl '>
          </input>
          <button className='rounded text-white bg-stone-800 p-2'>submit</button>
        </form>
        {cart.map((value) => (
          <ul className='w-1/2 h-auto flex flex-row  bg-white p-3 rounded m-2 text-xl justify-between'>
            
            <p>{value}</p>
            <button
            className="text-red-600 font-bold" 
            onClick={()=>deleteItem(value)} >X</button></ul>
        ))}
        
      </div>
      

    </div>
  )
}

export default App
