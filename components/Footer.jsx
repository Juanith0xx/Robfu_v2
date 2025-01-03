import { useEffect, useState } from 'react';
import './css/Footer.css';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('.footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
      <div className="footer-content">
        {/* Sección de íconos */}
        <div className="footer-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="icon">
            <i className="fa fa-youtube-play" aria-hidden="true"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="icon">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="mailto:info@gmail.com" className="icon">
            <i className="fa fa-envelope" aria-hidden="true"></i> contacto@robfu.com
          </a>
        </div>

        {/* Sección de texto */}
        <div className="footer-text">
          <p className="footer-title">Proyecto apoyado por</p>
          <p className="footer-highlight">CORFO</p>
          <p className="footer-description">
            Roblu es tu plataforma integral para diseñar, cotizar, obtener planos y recibir muestras a medida en unos pocos clics,
            optimizando tu productividad al máximo.
          </p>
        </div>
      </div>

      {/* Línea horizontal */}
      <div className="footer-line"></div>

      {/* Copyright y logo */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          Copyright © 2024 Roblu Spa. (Chile) All rights reserved.
        </p>
        <img
          src="https://www.robfu.com/hs-fs/hubfs/logoblanco.png?width=73&height=88&name=logoblanco.png"
          alt="Logo"
          className="logo-footer"
        />
      </div>
    </footer>
  );
};

export default Footer;
