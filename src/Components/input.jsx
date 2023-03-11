import React from 'react'

function Input(props) {
  return (
    <div>
         <div class="mb-6">
        <label for={props.id} className={props.labelclassName}>{props.label}</label>
        <input type={props.type} id={props.id} className={props.inputclassName} placeholder={props.placeholder} required/>
    </div> 
    </div>
  )
}

export default Input
