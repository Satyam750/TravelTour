import './guide.scss'

import icon1 from "../../assets/icon (1).png"
import icon2 from "../../assets/icon (2).png"
import icon3 from "../../assets/icon (3).png"
import Image from "../../assets/ImageBook.png"

const Guide = () => {
  return (
    <div className='Guide container section'>
        <div className="secContainer flex">
          <div className="textDiv grid">

            <div className="secHeader">
              <span>Easy and Fast</span>
              <h2>Book YOur Next Trip</h2>
            </div>

            <div className="secContent grid">
              <div className="singleSection flex">
                <img src={icon1} alt="" />
                <div className="text">
                  <span>Make a choice</span>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
              <div className="singleSection flex">
                <img src={icon2} alt="" />
                <div className="text">
                  <span>Reach Airport on Selected Date</span>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
              <div className="singleSection flex">
                <img src={icon3} alt="" />
                <div className="text">
                  <span>Make Payment</span>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>

          </div>

          <div className="imgDiv">
            <img src={Image} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Guide