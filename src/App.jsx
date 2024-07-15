import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
      
      <div className=' max-w-full max-h-full duration-200 '//tailwind ka syntax h bhai
      style={{backgroundColor:color}}//upr wale colors ko implement krne k liye ye krna pdega syntax h;-|
      >
        


        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> //bar hai ye
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>//is bar ke andr buttons aenge
            <button
            onClick={() => setcolor("red")} //onclick method expect to pass function in it that's why we passed arrow function in it
             className='outline-none px-4'style={{backgroundColor:"red"}}>RED</button> 
             <button 
             //phle classname likho , baadme onclick daalo
            onClick={() => setcolor("green")}
             className='outline-none px-4'style={{backgroundColor:"green"}}>GREEN</button>
             <button
            onClick={() => setcolor("blue")}
             className='outline-none px-4'style={{backgroundColor:"blue"}}>BLUE</button>
          </div>
        </div>
      </div>
    
  )
}


export default App
