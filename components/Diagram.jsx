import './css/Diagram.css';

const Diagram = () => {
  return (
    <div className="diagram-container">
      <p className="diagram-subtitle">Que hacemos</p>
      <h1 className="diagram-title">
        Nunca fue tan fácil hacer un <br />  Mueble.
      </h1>
      <div className="diagram-cards-row">
        {/* Card 1 */}
        <div className="diagram-card">
          <img
            src="img/diagram/Disena.jpg"
            alt="Smart popups"
            className="diagram-icon"
          />
          <h3>Diseña</h3>
          <p>
            Usa nuestro editor de "Drag & Drop"y crea tu proyecto en minutos.
          </p>
        </div>
        {/* Card 2 */}
        <div className="diagram-card">
          <img
            src="img/diagram/cotiza.jpg"
            alt="Embedded Forms"
            className="diagram-icon"
          />
          <h3>Cotiza</h3>
          <p>
            Al finalizar, recibiras un correo con la cotizacion total de tu proyecto.
          </p>
        </div>
        {/* Card 3 */}
        <div className="diagram-card">
          <img
            src="img/diagram/fabrica.jpg"
            alt="Autoresponder"
            className="diagram-icon"
          />
          <h3>Fabrica</h3>
          <p>
            Robfu se encargara de todo, asi tu solo te preocuparas de tus clientes.
          </p>
        </div>
        {/* Card 4 */}
        <div className="diagram-card">
          <img
            src="img/diagram/Delivery.jpg"
            alt="Analytics"
            className="diagram-icon"
          />
          <h3>Delivery</h3>
          <p>
          Recibe todo  listo para armar y seguir vendiendo más proyectos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Diagram;
