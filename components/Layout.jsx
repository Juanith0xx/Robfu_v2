import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Nav } from "react-bootstrap";

const Layout = () => {
  return (
    <div>
      {/* Navbar visible en todas las páginas */}
      <Nav />
      {/* Renderiza el contenido de las rutas hijas */}
      <main>
        <Outlet />
      </main>
      {/* Footer común a todas las páginas */}
      <Footer />
    </div>
  );
};

export default Layout;
