import './categories.scss'

import satellite from "../../assets/anetnna.png"
import rec from "../../assets/rec.png"
import aeroplane from "../../assets/plane.png"
import mic from "../../assets/mic.png"
import setting from "../../assets/settings.png"

const Categories = () => {
  return (
    <div className='Categories container section'>
      <div className="secHeader">
        <span>
        Category
        </span>
        <h2>
          We Offer best services
        </h2>
      </div>

      <div className="secContainer grid">
        <div className="singleCard grid">
          <div className="imgDiv">
            <img src={satellite} alt="" className='mainImage' />
            <img src={rec} alt="" className='design' />
          </div>
          <span>
            Calculated Weather
          </span>
          <p>
            Built Wicket longer admire do barton vanity itself do in it.
          </p>
        </div>

        <div className="singleCard grid">
          <div className="imgDiv">
            <img src={aeroplane} alt="" className='mainImage' style={{width:80}} />
            <img src={rec} alt="" className='design' />
          </div>
          <span>
            Best Flights
          </span>
          <p>
            Engrossed listing Park gate sell they weny hard for the great evening.
          </p>
        </div>

        <div className="singleCard grid">
          <div className="imgDiv">
            <img src={mic} alt="" className='mainImage' style={{marginRight:"40%", marginTop:"-3%"}} />
            <img src={rec} alt="" className='design' />
          </div>
          <span>
            Local Events
          </span>
          <p>
            Barton vanity itself do in it. Preferd to men it engrossed listening.
          </p>
        </div>

        <div className="singleCard grid">
          <div className="imgDiv">
            <img src={setting} alt="" className='mainImage' />
            <img src={rec} alt="" className='design' />
          </div>
          <span>
            Calculated Weather
          </span>
          <p>
           We deliver outscourced aviation services for military customers.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Categories