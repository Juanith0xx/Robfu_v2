import { Carousel } from 'react-bootstrap';
import './css/CarruselMarcas.css';  // Asegúrate de tener este archivo de CSS para personalizar el estilo si lo necesitas

const CarruselMarcas = () => {
  return (
    <div>
      <Carousel className="custom-carousel" controls={false} indicators={false}>
        <Carousel.Item>
          <div className="d-flex">
            <img
              className="carousel-img"
              src="img/logo_marcas/marcas_png/Abet.png"
              alt="Abet"
            />
            <img
              className="carousel-img"
              src="img/logo_marcas/marcas_png/massisa.png"
              alt="masisa"
            />
            <img
              className="carousel-img"
              src="img/logo_marcas/marcas_png/Stylelite.png"
              alt="Stylelite"
            />
            <img
              className="carousel-img"
              src="img/logo_marcas/marcas_png/hafele.png"
              alt="hafele"
            />
            <img
              className="carousel-img"
              src="img/logo_marcas/marcas_png/Egger.png"
              alt="Egger"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarruselMarcas;
