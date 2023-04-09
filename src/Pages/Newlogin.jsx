import React from 'react'
import Logo from '../Components/Logo';
import LoginForm from "../Components/LoginForm";
import login from "../images/login.svg"
import Quote from '../Components/Quote';
import { Routes, Route } from 'react-router-dom';
import SignupForm from '../Components/SignupForm';
import Button from '../Components/Button';
function Newlogin() {
  return (
    // _________________parent div______________
    <div className='flex flex-wrap container h-screen border mx-auto border-black'>
        {/* _________________child1____________________ */}
        <div className='w-1/2 h-screen '>

        </div>
{/* ________________________child2 andparent2 in the same time__________________ */}

        <div className='w-1/2 h-screen   flex flex-wrap'>
            {/* ----------------child1 in parent2-------------- */}
            <div className='w-2/12 bg-white h-screen flex flex-col '> 
                <div className=' pt-5   rounded-lg mt-40 bg-white'>
                <Button type="button" className="text-black  bg-white  hover:bg-white hover:text-gray-900  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm  w-full  px-5 py-2.5 text-center rounded-l-full rounded-t-full rounded-b-full rounded-r-none  " name=" signup"/>
                <Button type="button" className="text-white  bg-yellow-400   hover:bg-white hover:text-gray-900  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  text-sm   w-full  px-5 py-2.5 text-center rounded-l-lg " name=" signin"/>
               
                </div>

            </div>
        {/* -------------------child2 in parent2---------------- */}
            <div className=' w-10/12 h-screen border-yellow-400 border-8'> 
                <Routes>

                    <Route path='/' exact element={<SignupForm/>}/>
                    <Route path='/signin' exact element={<LoginForm/>}/>

                </Routes>
        
             </div>

        </div>
      
    </div>
  )
}

export default Newlogin
