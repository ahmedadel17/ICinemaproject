import React from 'react'
import Avatar from './Avatar'
import { stars } from '../assets'
function Comments(props) {
  return (
    <div className='w-[95%]   mx-auto border-b border-zinc-300  h-28 '>
       <div className='flex flex-row  relative   h-20'>
       <Avatar src={props.pic}/>
        <div>
        <h1 className='mt-5 capitalize dark:text-white'>{props.name}</h1>
        <h2 className='text-gray'>{props.date}</h2>
        </div>
        <img src={stars} alt="" className=' w-44 h-5 mt-6 absolute right-2' />
        </div>
        <h1 className='  mx-20 dark:text-white'>{props.comment}</h1>
    </div>
  )
}

export default Comments
