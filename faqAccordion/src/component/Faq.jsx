import React from 'react'
import { useState } from 'react'

function Faq({
    question
}) {
    const [state,setState]=useState(false)
       


    return (
        <section className='flex flex-col'>
        <div className='w-full bg-pink-400 border rounded-md border-double border-green-800 justify-between p-2 flex flex-row'>
            <p className='flex justify-center items-center'>{question.title}</p>
            <button
                type='button'
                onClick={()=>setState(!state)}
                className='border rounded-lg border-blue-600 p-4 text-center bg-blue-700 text-white'>{state===false?'+':'-'}</button>
        </div>
        {state && (<p className=' border rounded-lg bg-white flex justify-center items-center p-2'>{question.answer}</p>)}
        </section>
    )
}

export default Faq