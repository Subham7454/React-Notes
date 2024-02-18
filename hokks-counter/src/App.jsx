import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCount]=useState(15)
  const addc=()=>{
    if(counter<20){
    setCount(counter+1)
    }
  }
  const remc=()=>{
    if(counter>0){
    setCount(counter-1)
    }
  }



  return (
    <>
     <h1>counter app only between 0 to 20</h1>
     <h2>{counter}</h2>
     <button onClick={addc}>ADDcounter</button>
     <br/>
     <button onClick={remc}>REMOVEcounter</button>
    </>
  )
}

export default App
