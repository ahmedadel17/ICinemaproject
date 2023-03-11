import React from 'react'
import Logo from '../Components/Logo';
import LoginForm from "../Components/LoginForm";
import login from "../images/login.svg"
import Quote from '../Components/Quote';
import { Routes, Route } from 'react-router-dom';
import SignupForm from '../Components/SignupForm';
function Loginpage() {
  return (
 
 <div>
  
  <div className='w-screen h-screen mx-auto flex flex-wrap'>
<div className='flex-auto bg-white h-screen w-1/2 leftimage '>
<Logo/>
<img src={login} alt="login " className='   p-40' />
</div>
{/* ---------------------------- */}
<div className='flex-auto bg-white h-screen w-1/2'>
 <div className='logodisplay'>
 <Logo/>
 </div>

<div className='w-2/3 flex flex-col flex-auto  mx-auto  h-screen'>

<Routes>

  <Route path='/' exact element={<SignupForm/>}/>
  <Route path='/signin' exact element={<LoginForm/>}/>
  
</Routes>


</div>
</div>
   </div>
 </div>
  )
}

export default Loginpage
