import { useState, useCallback, useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const copyPassword=useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) {
      str += '0123456789'
    }
    if (charAllowed) {
      str += '!@#$%^&*{}[]_-+~'
    }
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass)



  }, [length, numberAllowed, charAllowed, setPassword])
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const copyPasswordToClipboard=useCallback(()=>{
    //to select the password to be copied for the user satisfaction
    copyPassword.current?.select()
    //this method is used to select the given range of characters.
    // copyPassword.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <h1>password generator</h1>
      <div className='mainPasswordBox'>
        <input
          type='text'
          placeholder='password'
          value={password}
          className='inputPasswordBox'
          readOnly
          ref={copyPassword}/>
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white py-3 px-2 shrink-0 rounded-md'>copy</button>
        <div className='inputbelow flex tex-sm gap-x-2 '>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label htmlFor="length">length:{length}</label>
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={(e) => {
                setNumberAllowed((prev) => !prev)

              }} />
            <label htmlFor="numberInput">Numbers</label>
            <input
              type='checkbox'
              defaultChecked={charAllowed}
              id='charInput'
              onChange={(e) => {
                setCharAllowed((prev) => !prev)

              }} />
            <label htmlFor="charInput">characters</label>

          </div>
        </div>
      </div>


    </>
  )
}

export default App
