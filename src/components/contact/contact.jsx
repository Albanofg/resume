import './contact.css'
import React from 'react'
import { useState, useEffect } from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import { BiMailSend } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsGithub } from "react-icons/bs";
import Preloader from '../loader/loader';

const Contact = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);

  return (

    <div>
      { loading ? <Preloader/> :
          
    <div className='contact-info'>
             
          <a className='ext-link' href='http://wa.me/+543407411721' target="_blank" rel="noopener noreferrer">
            <i className='card-icon'><IoLogoWhatsapp/> </i>
            <p>WhatsApp</p>
          </a>

          <a className='ext-link' href='mailto:albanofgonzalez@gmail.com' target="_blank" rel="noopener noreferrer">
            <i className='card-icon'><BiMailSend/></i>
            <p>albanofgonzalez@gmail.com</p>
          </a>
        
          <a className='ext-link' href='tel:+543407411721' target="_blank" rel="noopener noreferrer">
            <i className='card-icon'><BiPhoneCall/></i>
            <p>Tel +54 3407 411721</p>
          </a>

          <a className='ext-link' href='https://www.linkedin.com/in/albanofgonzalez/' target="_blank" rel="noopener noreferrer">
            <i className='card-icon'><SlSocialLinkedin/></i>
            <p>LinkedIn</p>
          </a>
          
          <a className='ext-link' href='https://github.com/Albanofg' target="_blank" rel="noopener noreferrer">
            <i className='card-icon'><BsGithub/></i>
            <p>GitHub</p>
          </a>

    </div>
    }
  </div>
  )
}

      

export default Contact