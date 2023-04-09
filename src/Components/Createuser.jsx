import React from 'react'
import Button from "../Components/Button"

function Createuser(props) {
  return (
    <div className='flex border h-196px mt-5'>
      <img src="https://img.freepik.com/free-vector/social-biography-concept-illustration_114360-7181.jpg?size=626&ext=jpg&ga=GA1.2.80988938.1676138881&semt=ais" alt="desciption image" className='w-80' />
    <div className=' w-full'>
        <h1 className='text-lg font-bold'>{props.name}</h1>
        <h1 className='mt-2'>{props.description}</h1>
        {/* ------------------------------------- */}
     <div className='flex mt-5 relative'>

     <div class="mb-6 mx-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Create user</label>
    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
  </div>



  <div class="mb-6 w-96 mx-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Create  password</label>
    <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
  </div>

<Button name="Save" className="bg-yellow-400 text-lg w-44 h-10 rounded-lg mt-7 absolute right-20 " type="submit"/>
     </div>
  {/* ----------------------------------- */}
    </div>

    </div>
  )
}

export default Createuser
