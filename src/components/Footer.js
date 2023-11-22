import React from 'react'
import '../styles/Footer.css'
import {BsInstagram} from 'react-icons/bs';
import {AiFillFacebook} from 'react-icons/ai'


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <BsInstagram />
            <AiFillFacebook />
        </div>
        <p>&copy; 2023</p>
    </div>
  )
}

export default Footer