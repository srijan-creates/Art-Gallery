import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Components from './constants';


function App() {

  return (
    <>
    <Components.Navbar/>
    <Components.Hero/>
    <Components.Gallery/>
    <Components.ArtAwards/>
    <Components.News/>
    <Components.Mission/>
    <Components.Artist/>
    <Components.Booking/>
    <Components.Foundation/>
    <Components.Program/>
    <Components.Testimonials/>
    <Components.Events/>
    <Components.Shop/>
    <Components.Contact/>
    <Components.Footer/>
    <Components.ScrollToTop/>
    <Components.ScrollOnTopReload/>
    </>
  )
}

export default App
