import React from 'react'
import Github from '../assets/github-icon.png'
import Instagram from '../assets/ig-icon.png'
import Twitter from '../assets/twitter-icon.png'

export default function Footer(){
    return(
        <div className='footer-container'>
            <footer className='socials'>
                <a href="#"><img className='social-img' src={Github} alt="" srcset="" /></a>
                <a href="#"><img className='social-img' src={Instagram} alt="" srcset="" /></a>
                <a href="#"><img className='social-img' src={Twitter} alt="" srcset="" /></a>
            </footer>
        </div>
    )
}