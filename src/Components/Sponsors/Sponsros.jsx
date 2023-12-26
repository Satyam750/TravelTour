import './sponsros.scss'
import logo1 from "../../assets/logo1.png"
import logo2 from "../../assets/logo2.svg"
import logo3 from "../../assets/logo3.png"
import logo4 from "../../assets/logo4.png"

const Sponsros = () => {
  return (
    <div className='Sponsors container'>
        <div className="logos flex">
          <img src={logo1} className='im1' alt="" />
          <img src={logo2} className='im2' alt="" />
          <img src={logo3} className='im3'  alt="" />
          <img src={logo4} className='im4' alt="" />
        </div>
    </div>
  )
}

export default Sponsros