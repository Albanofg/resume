import './contact.css'
import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { BiMailSend } from "react-icons/bi";
import { AiTwotonePhone } from "react-icons/ai";

const Contact = () => {
  return (
          
    <div className='contact-info'>
             
          <a className='ext-link' href='http://wa.me/+543407411721' target="_blank" rel="noreferrer">
            <i className='card-icon'><IoLogoWhatsapp/> </i>
            <p>whatsapp</p>
          </a>

          <a className='ext-link' href='mailto:albanofgonzalez@gmail.com' target="_blank" rel="noreferrer">
            <i className='card-icon'><BiMailSend/></i>
            <p>albanofgonzalez@gmail.com</p>
          </a>
        
          <a className='ext-link' href='tel:+543407411721' target="_blank" rel="noreferrer">
            <i className='card-icon'><AiTwotonePhone/></i>
            <p>tel +54 3407 411721</p>
          </a>

    </div>
  )
        

}

      

export default Contact