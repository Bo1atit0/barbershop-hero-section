import React from 'react'
import './button.css'


const button = ({color, text, icon:Icon}) => {
  return (
    <section className='button-component'>
      <button className={`button-component ${color}`}>
        {<Icon className='react-icon'/>} 
        {text}
      </button>
    </section>
  )
}

export default button