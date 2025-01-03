import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const listNames=["Rediet","Birhanu","Maste","Ruth","Hemrmela"]
  const mapped=listNames.map(
    (e)=>{
      return <p className='names'> 
        {e}
      </p>
    }
  )
  console.log(mapped);
  
  const func=a=>console.log(a)
  func("Nati")

  return (
    <div>
      {mapped}
    </div>
  )
}

export default App
