import React from 'react'
import { useState } from 'react'

function Radio({videoType,setOption,selectedOption}) {

    
  return (
    <form className='w-1/2 h-auto p-2 text-2xl text-blue-700 '>
        <label>
        <input 
        type='radio'
        value={videoType}
        name="videoOption"
        checked={selectedOption === videoType}
        onChange={(e)=>setOption(e.target.value)}/>{videoType}</label>
    </form>
    
  )
}

export default Radio