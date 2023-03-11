import React from 'react'
import logo from "../images/logo.png";
function Logo() {
  return (
 
      <div className='flex flex-wrap  w-full justify-center '>
<img src={logo} alt="logo" className='w-28 h-28 ' />
<h1 className='text-3xl text-yellow-300  py-14 font-bold'> <span className='text-black'>I</span> Cinema</h1>
</div>
    
  )
}

export default Logo
