import React from 'react'

function Quote(props) {
//     quote element is the text before the login form or the signup form like:
//     Sign in
// Register to control your cinema account and
// Follow everythin related to it
  return (
    <div>
    
      <h1 className='text-4xl font-bold text-center mt-4 mb-6  lg:mt-10 lg:mb-10  sm:mt-5 sm:mb-5'>{props.heading}</h1>
<h1 className='text-lg  w-1/2 text-center mx-auto  min-w-96 text-gray-700'>Register to control your cinema account and</h1>
<h1 className='text-lg w-1/2 text-center mx-auto '>Follow everythin related to it</h1>
    </div>
  )
}

export default Quote
