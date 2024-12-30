import CarruselMarcas from '../components/CarruselMarcas'
import Diagram from '../components/Diagram'
import HomePage from '../components/HomePage'
import MyNavbar from '../components/Nav'
import ThreeReasons from '../components/ThreeReasons'
import Communication from '../components/Communication'
import Comun_two from '../components/Comun_two'
import Comun_Three from '../components/Comun_Three'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import './App.css'



function App() {

  return (
    <>
    <ScrollToTop />
    <MyNavbar />
    <HomePage />
    <CarruselMarcas />
    <Diagram />
    <ThreeReasons />
    <Communication />
    <Comun_two />
    <Comun_Three />
    <Footer />
    </>
  )
}

export default App
