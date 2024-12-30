import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarruselMarcas from '../components/CarruselMarcas';
import Diagram from '../components/Diagram';
import HomePage from '../components/HomePage';
import MyNavbar from '../components/Nav';
import ThreeReasons from '../components/ThreeReasons';
import Communication from '../components/Communication';
import Comun_two from '../components/Comun_two';
import Comun_Three from '../components/Comun_Three';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Blog from '../components/Blog';
import News from '../components/News';
import Prices from '../components/Prices';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MyNavbar />
      <Routes>
        <Route path="/" element={
          <>
          <HomePage />
          <CarruselMarcas />
          <Diagram />
          <ThreeReasons />
          <Communication />
          <Comun_two />
          <Comun_Three />
          </>
        } />
        <Route path="/blog" element={<Blog />} />
        <Route path="/news" element={<News />} />
        <Route path="/prices" element={<Prices />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
