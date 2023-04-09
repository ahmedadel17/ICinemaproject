import React from 'react'
import {CiSquareMore} from "react-icons/ci"
function Categoryitem(props) {
  return (
    <div>
       <div className='flex  mt-3 ml-10 mr-20 '>
              <CiSquareMore className='' size={"2rem"}/>
             <h1 className='text-lg font-bold'>{props.category} {props.time} {props.country} {props.type}</h1>

              </div>
    </div>
  )
}

export default Categoryitem
