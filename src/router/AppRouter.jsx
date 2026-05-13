import { Routes, Route } from "react-router-dom";
import CorotoNavBar from "../app/ui/components/NavBar.jsx";
import CorotoFooter from "../app/ui/components/Footer.jsx";

import Home from "../app/pages/Home.jsx";
import About from "../app/pages/About.jsx";
import Contact from "../app/pages/Contact.jsx";
import Cart from "../app/pages/Cart.jsx";

// Aquí va el “marco” del sitio: barra y pie fijos, y en el medio la página según la URL para reutilizar y no estar pegando refactorizado
const AppRouter = () => {
  return (
    <>
      <CorotoNavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <CorotoFooter />
    </>
  );
};

export default AppRouter;
