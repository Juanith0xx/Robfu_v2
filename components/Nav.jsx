import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown } from 'react-bootstrap';
import { FaChevronDown, FaChevronUp, FaGreaterThan, FaArrowRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importar Link de react-router-dom
import './css/Nav.css';

function MyNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [itemsVisible, setItemsVisible] = useState([]);
  const [hover, setHover] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    if (isDropdownOpen) {
      setItemsVisible([]); // Reiniciar la visibilidad
      setTimeout(() => setItemsVisible([0]), 100);
      setTimeout(() => setItemsVisible([0, 1]), 200);
      setTimeout(() => setItemsVisible([0, 1, 2]), 300);
      setTimeout(() => setItemsVisible([0, 1, 2, 3]), 400);
      setTimeout(() => setItemsVisible([0, 1, 2, 3, 4]), 500);
    } else {
      setItemsVisible([]); // Ocultar los elementos cuando se cierra el menú
    }
  }, [isDropdownOpen]);

  return (
    <Navbar expand="lg" className="nav fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/">
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
            <Dropdown show={isDropdownOpen} onToggle={() => {}}>
              <Dropdown.Toggle
                as={Nav.Link}
                id="dropdown-proyectos"
                onClick={toggleDropdown}
              >
                Porque Robfu ?
                {isDropdownOpen ? (
                  <FaChevronUp style={{ marginLeft: '8px' }} />
                ) : (
                  <FaChevronDown style={{ marginLeft: '8px' }} />
                )}
              </Dropdown.Toggle>
              <Dropdown.Menu className={`dropdown-custom-menu ${isDropdownOpen ? 'show' : ''}`}>
                <div className="dropdown-row">
                  <div className={`dropdown-item ${itemsVisible.includes(0) ? 'show' : ''}`}>
                    <img src="img/icon/servicios.svg" alt="Servicios Icono" />
                    <h5>
                      <Link to="/servicios">Servicios</Link>
                    </h5>
                    <p className="home-p">
                      Clean and personified entry point of your website.<br />
                      Its design heavily relies on the video modules and crisp test sections.
                    </p>
                  </div>
                  <div className={`dropdown-item ${itemsVisible.includes(1) ? 'show' : ''}`}>
                    <img src="img/icon/marcas.svg" alt="Marcas Icono" />
                    <h5>
                      <Link to="/marcas">Marcas</Link>
                    </h5>
                    <p>
                      The page aims to boost your marketing<br />
                      effort with animated test and illustration<br />
                      sections. So you could promote better.
                    </p>
                  </div>
                  <div className={`dropdown-item ${itemsVisible.includes(2) ? 'show' : ''}`}>
                    <img src="img/icon/muestras.svg" alt="Muestras Icono" />
                    <h5>
                      <Link to="/muestras">Muestras</Link>
                    </h5>
                    <p>
                      Manifestation of the key marketing message<br />
                      with the right-to-the-point hero section.<br />
                      Supported by various sliders along the page.
                    </p>
                  </div>
                </div>
                <div className="dropdown-row">
                  <div className={`dropdown-item ${itemsVisible.includes(3) ? 'show' : ''}`}>
                    <img src="img/icon/tutorial.svg" alt="Tutoriales Icono" />
                    <h5>
                      <Link to="/tutoriales">Tutoriales</Link>
                    </h5>
                    <p>
                      Microsite options for bold marketing<br />
                      campaigns that rely on compelling videos.<br />
                      Push it to the edge to attract attention!
                    </p>
                  </div>
                  <div className={`dropdown-item ${itemsVisible.includes(4) ? 'show' : ''}`}>
                    <img src="img/icon/provedor.svg" alt="Proveedor Icono" />
                    <h5>
                      <Link to="/proveedor">Quiero Ser Proveedor</Link>
                    </h5>
                    <p>
                      Manifestation of the key marketing message<br />
                      with the right-to-the-point hero section.<br />
                      Supported by various sliders along the page.
                    </p>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/prices">Precios</Nav.Link>
            <Nav.Link
              as="a"
              href="mailto:contacto@robfu.com"
              className="button-contact"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Contacto&nbsp;{hover ? <FaArrowRight /> : <FaGreaterThan />}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
