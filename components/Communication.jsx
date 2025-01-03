import './css/Comunication.css';
import { useEffect, useState, useRef } from 'react';

const CommunicationSection = () => {
  const [animate, setAnimate] = useState(false);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true); // Activa la animación
          } else {
            setAnimate(false); // Resetea la animación si no está en el viewport
          }
        });
      },
      {
        threshold: 0.2, // Activa cuando el 20% del elemento sea visible
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
        className={`image-container ${animate ? 'animate' : ''}`}
        ref={imageRef}
        data-aos="fade-right"
      >
        <img
          src="img/logos/Robfu_corte_v2.png"
          alt="Communication Illustration"
          className="responsive-image"
        />
      </div>
      <div
        className={`text-content ${animate ? 'animate' : ''}`}
        ref={textRef}
        data-aos="fade-left"
      >
        <h1>
          Obten el valor de tus Proyectos.
          <img
            src="/img/logos/line-shape-10.svg"
            alt="shape"
            className="cs-screen"
          />
        </h1>
        <p>
        Al crear tu proyecto, nuestra plataforma hace el cálculo final del costo total del proyecto, así multiplicas tu productividad 10x.
        </p>
        <div className="testimonial">
          <p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunicationSection;
