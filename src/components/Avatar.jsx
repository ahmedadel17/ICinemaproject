import React from 'react'

function Avatar(props) {
  return (
    <div>
      <img className="w-[56px] h-[56px] rounded-full mx-4 my-4" src={props.src} alt="Rounded avatar"/>
     
    </div>
  )
}

export default Avatar
