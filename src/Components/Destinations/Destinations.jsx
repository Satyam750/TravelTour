import './destinations.scss'
import { FaLocationArrow } from 'react-icons/fa'
import imageOne from "../../assets/rome.jpg"
import imageTwo from "../../assets/nepal.jpg"
import imageThree from "../../assets/india.jpg"
import imageFour from "../../assets/japan.jpg"
import imageFive from "../../assets/korea.jpg"
import imageSix from "../../assets/lodon.jpg"

const Destinations = () => {
  return (
    <div className='Destinations container section'>
      <div className="secHeader">
        <span>Top Selling</span>
        <h2>Top Destination</h2>
      </div>

      <div className="secContainer grid">

        <div className="singleCard grid">
         <div className="imgDiv">
         <img src={imageOne} alt="" />
         </div>
         <div className="infoDiv">
          <div className="upperSpan flex">
            <span className="location">Rome, Itley</span>
            <span className="amount">8.43k</span>
          </div>
          <div className="lowerSpan flex">
          <FaLocationArrow className='icon' size={20}/>
            <span className="distance">10 Days Trip</span>
          </div>
         </div>
        </div>


        <div className="singleCard grid">
         <div className="imgDiv">
         <img src={imageTwo} alt="" />
         </div>
         <div className="infoDiv">
          <div className="upperSpan flex">
            <span className="location">Kathmandu, Nepal</span>
            <span className="amount">$3.43k</span>
          </div>
          <div className="lowerSpan flex">
          <FaLocationArrow className='icon' size={20}/>
            <span className="distance">15 Days Trip</span>
          </div>
         </div>
        </div>


        <div className="singleCard grid">
         <div className="imgDiv">
         <img src={imageThree} alt="" />
         </div>
         <div className="infoDiv">
          <div className="upperSpan flex">
            <span className="location">Agra, India</span>
            <span className="amount">$4.43k</span>
          </div>
          <div className="lowerSpan flex">
          <FaLocationArrow className='icon' size={20}/>
            <span className="distance">14 Days Trip</span>
          </div>
         </div>
        </div>

        <div className="singleCard grid">
         <div className="imgDiv">
         <img src={imageFour} alt="" />
         </div>
         <div className="infoDiv">
          <div className="upperSpan flex">
            <span className="location">Tokyo, Japan</span>
            <span className="amount">$15.43k</span>
          </div>
          <div className="lowerSpan flex">
          <FaLocationArrow className='icon' size={20}/>
            <span className="distance">14 Days Trip</span>
          </div>
         </div>
        </div>

        <div className="singleCard grid">
         <div className="imgDiv">
         <img src={imageFive} alt="" />
         </div>
         <div className="infoDiv">
          <div className="upperSpan flex">
            <span className="location">Soul, Korea</span>
            <span className="amount">$12.43k</span>
          </div>
          <div className="lowerSpan flex">
          <FaLocationArrow className='icon' size={20}/>
            <span className="distance">16 Days Trip</span>
          </div>
         </div>
        </div>

        <div className="singleCard grid">
         <div className="imgDiv">
         <img src={imageSix} alt="" />
         </div>
         <div className="infoDiv">
          <div className="upperSpan flex">
            <span className="location">Lodon, UK</span>
            <span className="amount">$11.43k</span>
          </div>
          <div className="lowerSpan flex">
          <FaLocationArrow className='icon' size={20}/>
            <span className="distance">17 Days Trip</span>
          </div>
         </div>
        </div>

        
      </div>
    </div>
  )
}

export default Destinations