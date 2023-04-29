import React from 'react'
import Squarebutton from './Squarebutton'
// import {BsFillSuitHeartFill} from 'react-icons/bs'
import { comment,like,share } from '../assets'
function Postinteractions(props) {
  return (
    <div className='w-full h-20   flex flex-row justify-start flex-grow '>
     <div className='flex flex-row  w-1/3 justify-start px-4 items-center'>
     <Squarebutton logo={<img src={like} alt='like' />}/>
     <h1 className='dark:text-white my-4 mx-2 text-lg'>{props.likes} likes</h1>
     </div>

    <div className='flex flex-row  w-1/3 justify-center items-center'>
    <Squarebutton logo={<img src={comment}  alt='comment'/>}/>
    <h1 className='dark:text-white my-4 mx-2 text-lg'>{props.comments} comments</h1>
    </div>

    <div className='flex flex-row  w-1/3 justify-center items-center'>
    <Squarebutton logo={<img src={share}  alt='share' />}/>
    <h1 className='dark:text-white my-4 mx-2 text-lg'>{props.shares} shares</h1>

    </div>


    </div>
  )
}

export default Postinteractions
