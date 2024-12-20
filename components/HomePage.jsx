import { Container, Row, Col, Button } from 'react-bootstrap'; // Importa Button
import './css/HomePage.css';

const HomePage = () => {
  return (
    <Container className='container-home'>
      <Row className="align-items-center">
        {/* Columna de texto */}
        <Col xl={5} lg={6} className="order-lg-first">
          <h1 className="home-h1">
            Diseña, compra y recibe tu <span className="highlight">proyecto.</span>
            <img
              src="/img/logos/line-shape-10.svg"
              alt="shape"
              className="cs-screen"
            />
          </h1>
          <p className="sub-text">
            Olvídate de hacer complicados cálculos para desarrollar tus proyectos. Ahora con robfu arrastra, modifica, compra y recibes tus proyectos fácilmente.
          </p>
          {/* Botón debajo del párrafo */}
          <Button
            href="https://www.robfu.com/configurador" target='bank'
            className="button-disena"
          >
            Diseña Aquí
          </Button>
        </Col>

        {/* Columna de imagen */}
        <Col xl={7} lg={6} className="text-center position-relative">
          <img
            src="/img/logos/Robfu_pc.svg" // Cambia la ruta según tu imagen
            alt="Vista previa del proyecto en computadora"
            className="img-fluid main-image"
          />
          <img
            src="/img/logos/Robfu_cel.svg" // Cambia la ruta según tu imagen
            alt="Vista previa del proyecto en móvil"
            className="img-fluid overlay-image"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
