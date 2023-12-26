import './home.scss'

import mainImage from "../../assets/Lady Image.png";
import aeroplane from "../../assets/plane.png";
import {FaPlay} from "react-icons/fa"


const Home = () => {
  return (
    <div className='Home container section'>
    <div className="textDiv grid">
        <span className='redText'>Best Destination around the world</span>
        <h2>Travel, enjoy and live a new and full life</h2>
        <p>
          Built Wicker longer admire do barton vanity itself do in it. Preferred
          to sportsmen ot engrossed listening. Park gate sell 
          they went hard for 
          the season.
        </p>
        <div className="buttons flex">
          <button className="btn">Find More</button>
          <div className="playBtn flex">
          <FaPlay className='icon' />
            <span className='demo'>Play Demo</span>
          </div>
        </div>
    </div>
    <div className="imgDiv flex">
      <img src={mainImage} alt="mainImage" />
    </div>
      <img src={aeroplane} alt="aeroplane image" className='aeroplane' />
    </div>
  )
}

export default Home