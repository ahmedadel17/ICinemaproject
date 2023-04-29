import React from 'react'

function Postimg(props) {
  return (
    <div className='w-full   flex justify-center items-center mt-7 mb-4' >
      <img  className='w-full rounded-xl h-[378px] mx-4 ' src={props.src} alt={props.alt} />
    </div>
  )
}

export default Postimg
