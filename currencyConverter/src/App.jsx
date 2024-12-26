import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(0)
  const [fromOption, setFromOption] = useState('usd')
  const [toOption, setToOption] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)


  const currencyInfo = useCurrencyInfo(fromOption)

  const currencyOptions = Object.keys(currencyInfo)

  const swap = () => {
    setFromOption(toOption)
    setToOption(fromOption)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toOption])
  }


  return (

    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600')`, }}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-100 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}>
            <div className='w-full mb-1'>
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={currencyOptions}
                onCurrencyChange={(currency)=>
                  setFromOption(currency)
                }
                selectCurrency={fromOption}
                onAmountChange={(amount)=>setAmount(amount)}
                 />
            </div>
            <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className='w-full mt-1 mb-4'>
              <InputBox
                label="To" 
                amount={convertedAmount}
                currencyOptions={currencyOptions}
                onCurrencyChange={(currency)=>
                  setToOption(currency)
                }
                selectCurrency={toOption}
                amountDisable
                 />
            </div>
            <button type="submit" 
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">Convert {fromOption.toUpperCase()} to {toOption.toUpperCase()}</button>
          </form>
        </div>

      </div>

    </div>


  )
}

export default App
