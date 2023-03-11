import React from 'react'

function Button(props) {
  return (
    <div>
    
    <button type={props.type} className={props.className}>{props.name}</button>

    </div>
  )
}

export default Button
