import React from 'react'
import './button.css'
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const button = () => {
  return (
    <section className='button-component'>
        <button className="book"><MdOutlineCalendarMonth className='react_icon'/>Book Your Appointment</button>
        <button className="services"><MdOutlineMiscellaneousServices className='react_icon'/>Explore Our Services</button>
    </section>
  )
}

export default button