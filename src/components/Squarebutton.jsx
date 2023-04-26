import React from 'react'

function Squarebutton(props) {
  return (
    <div className='w-[50px] h-[50px] rounded-lg border flex justify-center items-center'>
     {props.logo}
    </div>
  )
}

export default Squarebutton
