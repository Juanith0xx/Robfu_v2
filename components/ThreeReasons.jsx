import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Importar las flechas
import "./css/ThreeReasons.css"; // Estilos personalizados

const ThreeReasons = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="three-reasons-container">
      <div className="text-section">
        <p className="subtitle">GET STARTED IN MINUTES</p>
        <h2 className="title">
          3 Main Reasons to <span className="highlight">Choose us.</span>
          <img
              src="/img/logos/line-shape-10.svg"
              alt="shape"
              className="cs-screen"
            />
        </h2>
        <div className="accordion">
          <div
            className={`accordion-item ${activeIndex === 0 ? "active" : ""}`}
            onClick={() => toggleAccordion(0)}
          >
            <div className="accordion-header">
              <h3>Register and create your first seller portal.</h3>
              {activeIndex === 0 ? (
                <FaChevronUp className="accordion-icon" />
              ) : (
                <FaChevronDown className="accordion-icon" />
              )}
            </div>
            {activeIndex === 0 && (
              <p>
                It only takes 5 minutes. Set-up is smooth & simple, with fully
                customizable page design to reflect your brand.
              </p>
            )}
          </div>
          <div
            className={`accordion-item ${activeIndex === 1 ? "active" : ""}`}
            onClick={() => toggleAccordion(1)}
          >
            <div className="accordion-header">
              <h3>Manage your client easily</h3>
              {activeIndex === 1 ? (
                <FaChevronUp className="accordion-icon" />
              ) : (
                <FaChevronDown className="accordion-icon" />
              )}
            </div>
            {activeIndex === 1 && (
              <p>
                Streamline your client management process with efficient and
                intuitive tools that save time.
              </p>
            )}
          </div>
          <div
            className={`accordion-item ${activeIndex === 2 ? "active" : ""}`}
            onClick={() => toggleAccordion(2)}
          >
            <div className="accordion-header">
              <h3>Start selling tickets</h3>
              {activeIndex === 2 ? (
                <FaChevronUp className="accordion-icon" />
              ) : (
                <FaChevronDown className="accordion-icon" />
              )}
            </div>
            {activeIndex === 2 && (
              <p>
                Begin selling tickets effortlessly with our integrated platform
                designed for your success.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="image-section">
        <img
          src="/img/logos/PC.png"
          alt="HelpDesk preview"
          className="helpdesk-image"
        />
      </div>
    </div>
  );
};

export default ThreeReasons;
