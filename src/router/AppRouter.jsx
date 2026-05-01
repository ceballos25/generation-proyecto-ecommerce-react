import { Routes, Route } from "react-router-dom";
import CorotoNavBar from "../app/ui/components/NavBar.jsx";

import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Cart from "../pages/Cart.jsx";

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
    </>
  );
};

export default AppRouter;