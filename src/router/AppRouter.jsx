import { Routes, Route } from "react-router-dom";
import CorotoNavBar from "../app/ui/components/NavBar.jsx";

import Home from "../app/pages/Home.jsx";
import About from "../app/pages/About.jsx";
import Contact from "../app/pages/Contact.jsx";
import Cart from "../app/pages/Cart.jsx";
import Login from "../app/ui/login/login.jsx";
import Register from "../app/ui/register/register.jsx";

const AppRouter = () => {
  return (
    <>
      <CorotoNavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default AppRouter;
