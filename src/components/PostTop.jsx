import React from 'react'
import Avatar from './Avatar'
import Edit from './Edit'

function PostTop(props) {
  return (
    <div>
       
       <div className='flex flex-row  relative'>
       <Avatar src={props.src}/>
        <div>
        <h1 className='mt-5 capitalize dark:text-white'>{props.name}</h1>
        <h2 className='text-gray'>{props.time}</h2>
        </div>
       <div className='absolute right-4  top-4'> <Edit/></div>
       </div>
      </div>
  
  )
}

export default PostTop
