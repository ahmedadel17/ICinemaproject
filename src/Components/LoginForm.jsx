import React from 'react'
import Button from './Button'
import Input from './input'
import { Link } from 'react-router-dom'
import Quote from './Quote'
function LoginForm() {
  return (
    <div className='LoginForm'>
      <Quote heading="Sign in"/>
      <div className=' flex flex-col   mx-auto'>
        <div className=' mt-20'>
            <form action="">
                <Input 
                type="email"
                id="email" 
                placeholder="galaxycinema@gmail.com" 
                label=" Email Address" 
                labelclassName="block mb-2 text-medium text-left font-bold text-gray-900 " 
                inputclassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
                  <Input 
                type="password"
                id="Password" 
                placeholder="Enter password here!" 
                label=" Password" 
                labelclassName="block mb-2 text-medium text-left font-bold text-gray-900 " 
                inputclassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
               <div className=' flex flex-col items-center '>
                 <Button
                type="submit"
                name="SignIn"
                className="text-white  bg-gray-900 border border-gray-900 hover:bg-white hover:text-gray-900  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm w-48  px-5 py-2.5 text-center  mb-5 "
                />
                <Link to="/">
              <Button type="button" name="SignUp" className=" text-gray-900 bg-white hover:bg-gray-100  border  border-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5  w-48 text-center  items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mx-auto mb-5"/>
              </Link>
               </div>
            </form>
        </div>
    </div>
    </div>
   
  )
}

export default LoginForm
