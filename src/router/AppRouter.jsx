import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";

import Layout from "../components/layout/Layout";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Cart = lazy(() => import("../pages/Cart"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Layout>
        <Suspense
          fallback={<div className="text-center py-5">Cargando...</div>}
        >
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path={ROUTES.CART} element={<Cart />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.REGISTER} element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Layout>
    </>
  );
};

export default AppRouter;
