import React from 'react'

import PostTop from './PostTop'
import PostDescription from './PostDescription'
import Postimg from './Postimg'
import Postinteractions from './Postinteractions'

function Post(props) {
  return (
    <div >
         <div className='w-full h-[650px] border dark:bg-black my-5 rounded-xl  ' >
    <PostTop name={props.profilename} src={props.profileimage} time={props.time}/>
    <PostDescription desc={props.desc}/>
    <Postimg src={props.postimg} alt={props.postalt}/>
    <Postinteractions likes={props.likesno} comments={props.commentsno} shares={props.sharesno}/>
    </div>
    </div>
  )
}

export default Post
