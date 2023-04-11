import React from 'react'
import {logo} from "../assets"
import Yellowbutton from './Yellowbutton'
function Controltop() {
  return (
    <div className='flex border rounded-lg p-2 relative'>
      <img src={logo} alt="" className='w-10 h-10 rounded-full' />
      <div className=' ml-5'>
        <h1>Galaxycinema</h1>
        <h1>Galaxycinema@gmail.com</h1>
       
      </div>
     <Yellowbutton name=" User"/>
    </div>
  )
}

export default Controltop
