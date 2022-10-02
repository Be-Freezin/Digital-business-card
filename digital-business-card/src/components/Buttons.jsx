import React from 'react'
import Email from '../assets/email-icon.png'
import Linkedin from '../assets/linkedin-icon.png'

export default function buttons(){
    return(
        <div className='button-container'>
            <button className='email-btn btn'> <img className='btn-img' src={Email} alt="" srcset="" /> Email</button>
            <button className='linkedin-btn btn'> <img className='btn-img btn-linked' src={Linkedin} alt="" srcset="" /> LinkedIn</button>
        </div>
    )
}