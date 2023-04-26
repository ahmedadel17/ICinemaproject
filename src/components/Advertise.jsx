import React from 'react'

function Advertise(props) {
  return (
    <div className="border w-[720px] h-[776px]  rounded-lg border-yellow-500 mt-5 ">
    <img
      src={props.src}
      alt="shalaby"
      className="w-[720px] h-[720px] rounded-tl-lg rounded-tr-lg  "
      loading="lazy"
      
    />
    <h1 className="text-center mt-5">Top rated movie</h1>
    </div>
  )
}

export default Advertise
