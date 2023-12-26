import "./App.scss"
import Categories from "./Components/Categories/Categories"
import Destinations from "./Components/Destinations/Destinations"
import Footer from "./Components/Footer/Footer"
import Guide from "./Components/Guide/Guide"
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Sponsros from "./Components/Sponsors/Sponsros"
import Subscribe from "./Components/Subscribe/Subscribe"

function App() {

  return (
  
   <div className="sam">
   <Header/>
    <Home/>
   <Categories/>
   <Destinations/>
   <Guide/>
   <Sponsros/>
   <Subscribe/>
   <Footer/>

   </div>
  )
}

export default App
