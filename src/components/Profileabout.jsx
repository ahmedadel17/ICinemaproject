import React from 'react'
import Squareprofileimg from './Squareprofileimg'
import Customizedinputs from './customizedinputs'

function Profileabout() {
  return (
    <div className='  mx-auto h-screen mt-5'>
     
      <div className='w-full h-[350px]  flex '>
      
        <div className='w-1/3  h-full flex flex-col justify-around items-start'>
        

        <h1 className='text-xl font-normal'>Account data</h1>
        <h1 className='text-xl font-normal'>profile photo</h1>
           
           <Squareprofileimg src='https://media0018.elcinema.com/uploads/_310x310_4d5ef21e7c23c2b236dd2a11e40fa6bf0f1eed989d7782b9bbbd69b97e633996.jpg'/>
          
            <button className='border-2 w-[250px] h-[50px] rounded-2xl border-primary '>Edit profile</button>
        </div>
        <div className='w-2/3  h-full flex flex-col justify-around'>
        <Customizedinputs id='Cinema-name' name='Cinema name' type='text' />
        <Customizedinputs id='E-mail' name='Email' type='email' />
        <Customizedinputs id='password' name='Password' type='password'/>

        </div>
        <div className='w-2/3  h-full flex flex-col justify-around'>
        <Customizedinputs id='location' name='Location' type='text' />
        <Customizedinputs id='Fawry' name='Fawry Code' type='number' />
        <Customizedinputs id='phone' name='Phone number' type='number'/>
        </div>

      </div>
    </div>
  )
}

export default Profileabout
