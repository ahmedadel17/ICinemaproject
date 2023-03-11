import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Input from './input'
import Quote from './Quote'
function SignupForm() {
  return (
    <div>
         <div className='SignupForm'>
         <Quote heading=" Sign Up"/>
         
        <div className=' mt-5'>
            <form action="" className=''>
                <Input 
                type="email"
                id="email" 
                placeholder="galaxycinema@gmail.com" 
                label=" Email Address" 
                labelclassName="block mb-2 text-medium text-left font-bold text-gray-900  w-full " 
                inputclassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                />
                  <Input 
                type="password"
                id="Password" 
                placeholder="Enter password here!" 
                label=" Password" 
                labelclassName="block mb-2 text-medium text-left font-bold text-gray-900  w-full " 
                inputclassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                />
                  <Input 
                type="password"
                id="ConfirmPassword" 
                placeholder="Enter password here!" 
                label=" Confirm Password" 
                labelclassName="block mb-2 text-medium text-left font-bold text-gray-900  w-full " 
                inputclassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                />
               <div className=' flex flex-col items-center  '>
               <Button
                type="submit"
                name="Sign Up"
                className="text-white  bg-gray-900 border border-gray-900 hover:bg-white hover:text-gray-900  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-medium w-48  px-5 py-2.5 text-center  my-1 "
                />
               <Link to="/signin">
              <Button type="button" name="Sign In" className=" text-gray-900 bg-white hover:bg-gray-100  border  border-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-medium px-5 py-2.5  w-48 text-center  my-1  items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200  mb-5"/>
              </Link>
               </div>
            </form>
        </div>
    </div>
    </div>

  )
}

export default SignupForm
