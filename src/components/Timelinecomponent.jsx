import React from 'react'
// import Controltop from './Controltop';
import Post from './Post';
import Createpost from './Createpost';
import Ratings from './Ratings';

import About from './About';
import Comments from './Comments';
function Timelinecomponent() {
  return (
 <>
     <div>
      
      {/* ----------------parent-------------- */}
      <div className='w-full  h-auto flex'>
      {/* ----------------child1------------------- */}
        <div className='w-1/2 h-full '>
          {/* ---------------creatpost component---------------- */}
          <Createpost/>
          {/* --------------post component-------------- */}
          <Post 
          profilename='galaxy cinema' 
          time='10:18 PM' 
          desc='Are you ready ! … Avatar is counting Down !!! Tell your friends and come to watch it together in its premiere '
          profileimage='https://media0018.elcinema.com/uploads/_310x310_4d5ef21e7c23c2b236dd2a11e40fa6bf0f1eed989d7782b9bbbd69b97e633996.jpg' 
          postimg='https://hips.hearstapps.com/hmg-prod/images/movies-for-kids-2021-luca-1624279846.jpeg' 
          postalt='avatar'
          likesno='1K'
          commentsno='53k'
          sharesno='40'
          />
            <Post 
          profilename='galaxy cinema' 
          time='10:18 PM' 
          desc='Are you ready ! … Avatar is counting Down !!! Tell your friends and come to watch it together in its premiere '
          profileimage='https://media0018.elcinema.com/uploads/_310x310_4d5ef21e7c23c2b236dd2a11e40fa6bf0f1eed989d7782b9bbbd69b97e633996.jpg' 
          postimg='https://hbomax-images.warnermediacdn.com/2022-11/black-adam-hero_2.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=1200' 
          postalt='avatar'
          likesno='1K'
          commentsno='53k'
          sharesno='40'
          />
       
        </div>
        {/* ---------------child2--------------------- */}
        <div className='w-1/2 h-full    '>
          {/* ratings */}
          <About/>
          <div className=' w-full my-5  h-10'>
            <h1 className='text-2xl dark:text-white  mx-4'> Reviews</h1>
          </div>
         <div >
         <Ratings/>
        <div className='w-180 h-auto shadow-2xl mx-5 my-5 dark:bg-black rounded-lg'>
        <Comments
        pic='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' 
        name='Ahmed Elbastawesy' 
        date='20/10/2022'
        comment='One of the most visually innovative films ever' />
         <Comments
         pic='https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' 
        name='Abdallah salah' 
        date='20/10/2022'
        comment='One of the most visually innovative films ever' />
         <Comments
         pic='https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' 
        name='Ahmed Yamany' 
        date='20/10/2022'
        comment='One of the most visually innovative films ever' />
       
        
        </div>
        
         </div>

    

        </div>
      </div>



    </div>
 
 </>
  )
}

export default Timelinecomponent
