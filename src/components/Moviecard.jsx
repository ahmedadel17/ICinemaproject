import React from 'react'
import Categoryitem from './Categoryitem'

function Moviecard() {
  return (
    <div className='w-720px h-240px border mt-5 ml-5 mr-5 flex rounded-lg p-5' > 
      <img src="https://assets.voxcinemas.com/posters/P_HO00009956.jpg" alt="" className='w-40 h-64 rounded-lg mt-5 mb-5 ml-5 border-yellow-500 border-4' />
      <div className=' w-full  ml-5'>
        <h1 className='mt-5 font-bold'> Nabil elgameel Dr tagmeel</h1>

        <h1 className='mt-10 font-bold'>Starring: mohamed tharwat</h1>
        <div className='flex   mt-5 '>
           <div>

             <Categoryitem category="Comedy"/>
             <Categoryitem time="105min"/>
             
           </div>
            
            <div>
             <Categoryitem country="Egyptian"/>
             <Categoryitem country="General"/>

            </div>
        </div>
        <h1 className='text-lg font-bold mt-5'>Release date:/28/12/2022</h1>
      </div>

    </div>
  )
}

export default Moviecard
