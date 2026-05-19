import SwiperAbout from "../components/about/SwiperAbout";
import "swiper/css";
import "../styles/pages/About.css";

const About = () => {
  return (
    <div className="dinamic-container">
      <main className="main-container">
        <main className="container py-5">
          <h2 className="text-center mb-4 fw-bold">Acerca de Nosotros</h2>
          <section className="container py-5">
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0 text-center">
                <img
                  src="https://kimi-web-img.moonshot.cn/img/dreamewaste.com/0dc0b02eb632ad0d839dbb2156af419d45e23329.png"
                  className="img-fluid rounded shadow"
                  alt="Coroto"
                  style={{ maxHeight: "400px", objectFit: "contain" }}
                />
              </div>
              <div className="col-md-6 d-flex flex-column align-items-center text-center">
                <h2 className="m-2">Nuestra Misión</h2>
                <hr className="border border-danger border-2 opacity-50 w-50" />
                <p className="lead">
                  Conectamos a los colombianos con hardware tecnológico de
                  segunda vida, reduciendo residuos electrónicos y
                  democratizando el acceso a la tecnología a precios accesibles.
                  En Colombia se desechan más de 400 mil toneladas de equipos
                  electrónicos al año. Nosotros les damos una segunda
                  oportunidad.
                </p>
              </div>
            </div>
          </section>

          <section className="container py-5">
            <div className="row align-items-center flex-md-row-reverse">
              <div className="col-md-6 mb-4 mb-md-0 text-center d-flex justify-content-center">
                <img
                  src="src/assets/about/colombia.png"
                  className="img-fluid"
                  alt="Colombia - Visión Coroto 2030"
                  style={{ maxHeight: "400px", objectFit: "contain" }}
                />
              </div>
              <div className="col-md-6 d-flex flex-column align-items-center text-center">
                <h2 className="m-2">Nuestra Visión 2030</h2>
                <hr className="border border-danger border-2 opacity-50 w-50" />
                <p className="lead">
                  Para 2030, <strong className="text-success">Coroto</strong>{" "}
                  operará en las principales ciudades de Colombia, movilizando
                  más de 10,000 dispositivos reacondicionados al año. Medellín,
                  Bogotá, Cali, Barranquilla, Cartagena — y de ahí hacia cada
                  municipio que necesite acceso a tecnología sin pagar precio de
                  primera.
                </p>
              </div>
            </div>
          </section>

          <section className="container py-5">
            <h2 className="text-center mb-4">Nuestro Equipo</h2>
            <hr className="border border-danger border-2 opacity-50" />
            <SwiperAbout />
          </section>
        </main>
      </main>
    </div>
  );
};

export default About;
