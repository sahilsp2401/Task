import End from "./Components/End";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Lower from "./Components/Lower";
import Mid from "./Components/Mid";
import Navbar from "./Components/Navbar";

const App = ()=> {
  return (
    <div className="continer">
    <Navbar/>
    <Hero/>
    <Mid/>
    <Lower/>
    <End/>
    <Footer/>
    </div> 
  )
}

export default App;