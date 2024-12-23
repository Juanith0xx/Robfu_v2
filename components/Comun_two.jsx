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
