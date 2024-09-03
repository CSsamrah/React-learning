import { useState } from 'react'
import ButtonAppBar from './components/NavBar'
import MediaCard from './components/Card'
function App() {

  let friends=['samrah','areesha']

  let someObj={
    username:['talha','areeba','samrah'],
    age:34
  }

  return (
    <>
    <ButtonAppBar/>
    <><h1 className='bg-orange-400 text-center text-black rounded-2xl p-7'> Tailwind Css</h1></>
    {someObj.username.map((name,index)=>(
    <MediaCard key={index} username={name}/>
    ))}
    <MediaCard username='arifa'/>
    {friends.map((names,index)=>(
      <MediaCard key={index} username={names} />
    ))}
    
    
    </>
   
  )
}

export default App
