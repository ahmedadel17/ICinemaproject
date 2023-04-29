import React from 'react'
import { locaiton, following } from '../assets';    
function About() {
  return (
    <div className='w-full'> 
         <div className='w-full  h-20  mb-5  '>
            <h1 className='text-2xl dark:text-white   mx-4 my-4 '>About</h1>
            <div className='flex flex-row justify-start'>
             
              <div className='flex flex-row mx-4 '>
                <img src={following} alt="following" />
                <h1 className='dark:text-white'>330 followers</h1>

              </div>
              <div className='flex flex-row   right-4 top-14 ml-48'>
                <img src={locaiton} alt="following" />
                <h1 className='dark:text-white'>120 people checked in</h1>

              </div>

            </div>
          </div>
    </div>
  )
}

export default About
