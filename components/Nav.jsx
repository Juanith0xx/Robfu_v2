import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown } from 'react-bootstrap';
import { FaArrowCircleRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from 'react';  // Importa useState para manejar el estado
import './css/Nav.css';

function MyNavbar() {
  // Estado para controlar si el menú está desplegado o no
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Función para alternar el estado del dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Navbar expand="lg" className="nav fixed-top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/img/logos/logorob.jpg"
            alt="Logo"
            width="149"
            height="41"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto custom-nav-spacing">
            {/* Menú desplegable "Porque Robfu" */}
            <Dropdown show={isDropdownOpen} onToggle={toggleDropdown}>
              <Dropdown.Toggle as={Nav.Link} id="dropdown-proyectos">
                Porque Robfu ?
                {/* Cambiar la dirección de la flecha dependiendo del estado */}
                {isDropdownOpen ? (
                  <FaChevronUp style={{ marginLeft: '8px' }} />
                ) : (
                  <FaChevronDown style={{ marginLeft: '8px' }} />
                )}
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-custom-menu">
                {/* Fila 1 */}
                <div className="dropdown-row">
                  <div className="dropdown-item">
                    <img src="img/icon/servicios.svg" alt="Servicios Icono" />
                    <h5>Servicios</h5>
                    <p className='home-p'>Clean and personified enter point of your website.<br></br> Its design heavily relies on the video modules and crisp test sections.</p>
                  </div>
                  <div className="dropdown-item">
                    <img src="img/icon/marcas.svg" alt="Marcas Icono" />
                    <h5>Marcas</h5>
                    <p>The page aims to boost yout marketing<br></br>eff whith animated test and illustration<br></br>sections. So you could promove better.</p>
                  </div>
                  <div className="dropdown-item">
                    <img src="img/icon/muestras.svg" alt="Muestras Icono" />
                    <h5>Muestras</h5>
                    <p>Maifestation of the key marketing message<br></br> with the right-to-the-point hero section.<br></br>Supported by various sliders along the page.</p>
                  </div>
                </div>
                {/* Fila 2 */}
                <div className="dropdown-row">
                  <div className="dropdown-item">
                    <img src="img/icon/tutorial.svg" alt="Tutoriales Icono" />
                    <h5>Tutoriales</h5>
                    <p>Microsite options for bold marketing<br></br> campaigns that rely on compelling videos.<br></br>Push it to the edge to attract attention!</p>
                  </div>
                  <div className="dropdown-item">
                    <img src="img/icon/provedor.svg" alt="Proveedor Icono" />
                    <h5>Quiero Ser Proveedor</h5>
                    <p>Manifestation of the key marketing message<br></br>with the right-to-the-point hero section.<br></br>Supported by various sliders along the page.</p>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#news">News</Nav.Link>
            <Nav.Link href="#news">Precios</Nav.Link>
            <Nav.Link href="mailto:contacto@robfu.com" className="button-contact">
              Contacto
              <FaArrowCircleRight style={{ marginLeft: '8px' }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
