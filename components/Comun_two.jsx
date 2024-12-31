import './css/Comunication-two.css';
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
         Medidas De Fabricación Por Gabinete.
        </h1>
        <p>
        Ahora nunca más tendrás que hacer complicados cálculos para obtener los planos de corte, ya que se calculan automáticamente al crear tu proyecto.
        </p>
        <div className="testimonial">
          <p>
          </p>
        </div>
      </div>
      <div
        className={`image-container ${animate ? 'animate' : ''}`}
        ref={imageRef}
        data-aos="fade-right"
      >
        <img
          src="img/logos/Robfu_corte.png"
          alt="Communication Illustration"
          className="responsive-image"
        />
      </div>
    </div>
  );
};

export default CommunicationSection;
