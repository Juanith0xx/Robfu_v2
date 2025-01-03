import './css/Comun_Three.css';
import { useEffect, useState, useRef } from 'react';
import { FaGreaterThan,FaArrowRight } from "react-icons/fa";


const CommunicationSection = () => {
  const [animate, setAnimate] = useState(false);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true); // Activa la animación cuando el elemento es visible
          } else {
            setAnimate(false); // Resetea la animación si el elemento no está visible
          }
        });
      },
      {
        threshold: 0.2, // Activa cuando el 20% del elemento es visible
      }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <div className="communication-container">
      <div
        className={`text-content ${animate ? 'animate' : ''}`}
        ref={textRef}
        data-aos="fade-left"
      >
        <h1>
         Una Fábrica en tus manos.
         <img
            src="/img/logos/line-shape-10.svg"
            alt="shape"
            className="cs-screen"
          />

        </h1>
        <p>
        Trabajar con robfu es como tener una fábrica completa en tus manos. Compra y recibe todo el material mecanizado y listo parta armar tus proyectos, multiplica tu productividad y sumate a la transformación digitalque tu empresa necesita.
        </p>
        <div className="testimonial">
          <a target="_blank" href="#" className="button-disena" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} > Ver&nbsp;{hover ? <FaArrowRight /> : <FaGreaterThan />} </a>
        </div>
      </div>
      <div
        className={`image-container ${animate ? 'animate' : ''}`}
        ref={imageRef}
        data-aos="fade-right"
      >
        <img
          src="img/logos/Robfu_celular.jpg"
          alt="Communication Illustration"
          className="responsive-image"
        />
      </div>
    </div>
  );
};

export default CommunicationSection;
