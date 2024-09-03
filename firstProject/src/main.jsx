import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

 // how the react is actually running at the back 
// here the app is actually a function which is being run here we can also make it a function and can run it
//we can also call this app function as function to render it MyApp() it will work 
function MyApp(params) {
  return(
    <div>
      <h1> custom react app | samrah</h1>
    </div>
  )
  
}

//this object syntax will not work since react expects a particular syntax to render it into html.
const ReactElement={
  type:'a',
  props:{
    href:'https://google.com',
    target:'_blank'
  },
  children:'click me to visit'
}


const anotherUser='chai aur react'
const AnotherReactElement=React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  AnotherReactElement

)
