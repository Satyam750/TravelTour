import'./footer.scss'
import { AiFillInstagram } from 'react-icons/ai'
import {FaFacebook } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsYoutube } from 'react-icons/bs'

import image1 from "../../assets/playstore.png"
import image2 from "../../assets/applestore.png"
const Footer = () => {
  return (
    <div className='Footer container'>
      <div className="secContainer grid">
        <div className="singleSection head ">
          <h2>SAM</h2>
          <p>Book your trip in minute, get full
          Control for much longer.</p>
        </div>

        <div className="singleSection com">
          <h3>Company</h3>
          <li>About</li>
          <li>Careers</li>
          <li>Support</li>
        </div>

        <div className="singleSection con">
          <h3>Contact</h3>
          <li>Help/FAQ</li>
          <li>Press</li>
          <li>Affiates</li>
        </div>

        <div className="singleSection more">
          <h3>More</h3>
          <li>Guidlines</li>
          <li>Insurance</li>
          <li>Hotels</li>
        </div>

        <div className='singleSection icse'>
        <div className="socials flex">
          <AiFillInstagram className='icon'/>
          <FaFacebook className='icon'/>
          <AiFillTwitterCircle className='icon'/>
          <BsYoutube className='icon'/>
        </div>
         </div>
       <span className='text'>Discover our app</span>
       <span className="flex lasticse">
        <img src={image1} className='image1' alt="" />
        <img src={image2} className='image2' alt="" />
       </span>
      </div>
    </div>
  )
}

export default Footer