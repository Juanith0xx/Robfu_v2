import { useState, useEffect } from 'react';
import { BsArrowUpCircle } from "react-icons/bs";
import './css/ScrollToTop.css';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [rotated, setRotated] = useState(false); // Nuevo estado para la rotación

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    setRotated(false); // Restablecer rotación al hacer clic
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-to-top ${visible ? 'show' : ''} ${rotated ? 'rotated' : ''}`}
      onClick={() => {
        setRotated(true); // Activar rotación
        scrollToTop();
      }}
    >
      <BsArrowUpCircle size={40} className={visible ? 'rotate' : ''} />
    </button>
  );
};

export default ScrollToTop;
  