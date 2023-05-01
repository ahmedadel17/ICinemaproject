import React from 'react'

function Squarebutton(props) {
  return (
    <div className='w-[56px] h-[56px] rounded-lg shadow-md dark:border d flex justify-center items-center dark:border-gray hover:bg-gray'>
     {props.logo}
    </div>
  )
}

export default Squarebutton
