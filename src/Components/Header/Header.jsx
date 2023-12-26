import { useState } from 'react';
import './header.scss'

import {AiFillCloseCircle} from 'react-icons/ai'
import { TbGridDots } from "react-icons/tb";

const Header = () => {
  
  const [active , setActive] = useState("menu")

  const showNavBar = () =>{
    setActive('menu showMenu')
  }
  const removeShowNavBar = () =>{
    setActive('menu')
  }


  const [transparent , setTransparent] = useState('Navbar')
  
  const addBg = () => {
    if(window.scrollY >= 10){
      setTransparent("Navbar activeHeader")
    }else{
      setTransparent("Navbar")
    }
  }

  window.addEventListener('scroll',addBg);

  return (
    <div className={transparent}>
      <div className='logoDiv'>
        <h1 className="logo">SAM</h1>
      </div>

      <div className={active}>
        <div className='lists flex'>
        <li>
          <a href="">Destination</a>
        </li>
        <li>
          <a href="">Hotels</a>
        </li>
        <li>
          <a href="">Flights</a>
        </li>
        <li>
          <a href="">Bookings</a>
        </li>
        </div>

        <div className='btns flex'>
            <button className="btn">Login</button>
            <button className="btn">SignUp</button>
            <select className='lang'>
              <option value="">EN</option>
              <option value="">FR</option>
              <option value="">SP</option>
            </select>
        </div>

        <div className="closeIcon" onClick={removeShowNavBar}>
        <AiFillCloseCircle className='icon' size={35}/>
        </div>
      </div>
      <div className="toggleIcon" onClick={showNavBar}>
      <TbGridDots  className='icon' size={27}/>
      </div>
    </div>
  )
}

export default Header