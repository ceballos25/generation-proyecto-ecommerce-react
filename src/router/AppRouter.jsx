import { Routes, Route } from "react-router-dom";

import NavBar from "../app/ui/layout/NavBar/NavBar.jsx";
import Footer from "../app/ui/layout/Footer/Footer.jsx";

import Home from "../app/pages/Home.jsx";
import About from "../app/pages/About.jsx";
import Contact from "../app/pages/Contact.jsx";
import Cart from "../app/pages/Cart.jsx";
import Login from "../app/ui/login/login.jsx";
import Register from "../app/ui/register/register.jsx";

// Aquí va el “marco” del sitio: barra y pie fijos, y en el medio la página según la URL para reutilizar y no estar pegando refactorizado
const AppRouter = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
