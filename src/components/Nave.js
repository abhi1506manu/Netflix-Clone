import React, { useEffect, useState } from 'react'
import Avatar from './Avatar_logo.png'
import './Nav.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Nave() {
    const[show,handleShow] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else{
                handleShow(false);
            }
        });
        return () =>{
            window.removeEventListener("scroll");
        };
    },[])
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img
        className='nav__logo'
        src="https://rogermooresmovienation.files.wordpress.com/2022/04/net.jpg"
        alt='Netflix Logo'
        />
        <img 
        className='nav__avatar'
        src={Avatar}
        alt="logo_avatar"
        />

    </div>
  )
}

export default Nave