import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [color, setColor] = useState()
  const [quotes, setQuotes] = useState({})



  const fetchColor = async () => {
    try {
      const response = await fetch(`https://x-colors.yurace.pro/api/random`)
      const data = await response.json()
      return data.hex;
    } catch (error) {
      console.error('error fetching color', error)
    }
  }

  const fetchQuote = async () => {
    try {
      const response = await fetch(`https://quotes-api-self.vercel.app/quote`)
      const data =await response.json()
      return data;
    } catch (error) {
      console.error('error fetching quote', error)
      return ({ quote: 'beleive in yourself you can achieve much more do not lose hope and stay consistent ', author: 'samrah' })
    }

  }

  const fetchQuoteAndColor = async () => {
    try {
      const [newColor,newQuote]=await Promise.all([fetchColor(),fetchQuote()])
      setColor(newColor)
      setQuotes(newQuote)

    } catch (error) {
      console.error('error fetching data', error)
    }
  }

  useEffect(() => {
    fetchQuoteAndColor();
  }, [])


  return (
    <>
    <div className='w-full h-screen flex flex-col justify-center items-center gap-6 m-0 p-0 duration-75 px-4' style={{ backgroundColor: color }}>
      <h1 className='text-center font-mono font-bold text-4xl text-white'>Quote Generator</h1>
      <div className='border rounded-2xl flex flex-col justify-center items-center bg-white p-4'>
        <p>"{quotes.quote}"</p>
        <br />
        <p>--{quotes.author}</p>
        
      </div>
      <button
          onClick={fetchQuoteAndColor}
          className='rounded-lg bg-cyan-600 border border-cyan-950 p-3 text-white'> Change Quote</button>
    </div>
    </>
  )
}

export default App
