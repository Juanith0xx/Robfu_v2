import './css/Comunication.css';
import { useEffect, useState } from 'react';

const CommunicationSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.communication-container');
      if (section) {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Verifica si el componente está visible en el viewport
        if (rect.top >= 0 && rect.top <= windowHeight) {
          setAnimate(true); // Activa la animación
        } else {
          setAnimate(false); // Resetea si está fuera del viewport
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="communication-container">
      <div
        className={`image-container ${animate ? 'animate' : ''}`}
        data-aos="fade-right"
      >
        <img
          src="img/logos/Robfu_corte.jpg"
          alt="Communication Illustration"
          className="responsive-image"
        />
      </div>
      <div
        className={`text-content ${animate ? 'animate' : ''}`}
        data-aos="fade-left"
      >
        <h1>
          Make communication <br /> <span>Fast & efficient.</span>
        </h1>
        <p>
          Our chatbots and live chat capture more ipsum of your best leads and
          convert them while they’re hot dummy text.
        </p>
        <div className="testimonial">
          <div className="quote-icon">&ldquo;</div>
          <p>
            “Our team really feels great to use deski apps specially their
            quality”
          </p>
          <span className="author">
            Micle Duke, Product Manager <br /> Uber Inc.
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommunicationSection;
