import React from 'react'
import {logo} from "../assets"
import Yellowbutton from './Yellowbutton'
function Controltop(props) {
  const user=<Yellowbutton name=" User"/>;
  const movies_about=(
    <div className='w-[560px] h-[50px] flex  absolute right-20 top-2 rounded-lg border-2 border-primary '>
      <button className='w-1/2 grow border-r rounded-tl-lg rounded-bl-lg  hover:bg-primary hover:text-black '>Movies</button>
      <button className='w-1/2 grow  rounded-tr-lg rounded-br-lg hover:bg-primary hover:text-black '>About</button>

      
    </div>
  )
  return (
    <div className='flex border rounded-lg p-2 relative dark:bg-dark'>
      <img src={logo} alt="" className='w-10 h-10 rounded-full' />
      <div className=' ml-5'>
        <h1>Galaxycinema</h1>
        <h1>Galaxycinema@gmail.com</h1>
       
      </div>
     {props.entry==='movies_about'?movies_about:user}
    </div>
  )
}

export default Controltop
